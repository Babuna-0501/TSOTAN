<template>
    <div>
      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category">{{category}}</option>
      </select>
      <div v-if="loading">Loading...</div>
      <ul v-else>
        <li v-for="product in filteredProducts" :key="product.id">
          {{product.title}}
          {{product.price}}
          <img :src="product.image" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        selectedCategory: '',
        loading: true
      }
    },
    computed: {
      categories() {
        const categories = new Set();
        this.products.forEach(product => {
          categories.add(product.category);
        });
        return Array.from(categories);
      },
      filteredProducts() {
        if (this.selectedCategory === '') {
          return this.products;
        } else {
          return this.products.filter(product => {
            return product.category === this.selectedCategory;
          });
        }
      }
    },
    mounted() {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
  </script>
  