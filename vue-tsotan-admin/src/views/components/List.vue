<template>
  <div class="card col-10 px-4">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <select v-model="selectedCategory" class="my-2 text-sm font-weight-bold mb-0">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category">{{category}}</option>
          </select>
          <thead>
            <tr>
              <th></th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              ></th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <li v-for="product in filteredProducts" :key="product.id" class="d-flex" style="align-items: center; gap: 20px;"> 
                <td>
                  <div class="d-flex px-2 py-1">
                    <div>
                      <img :src="product.image"  class="w-20"/>
                    </div>
                  </div>
                  
                </td>
                <td class="text-sm font-weight-bold mb-0">
                  {{product.title}}
                </td>
                <td class="align-middle text-center text-sm">
                  {{product.price}} ₮
                </td>
                <td class="align-middle">
                  <a
                    href="../edit"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                  >Edit</a>
                </td>
              </li>
            </tr>
          </tbody>
          <div v-if="loading">Loading...</div>
          <ul v-else>
      
        </ul>
        </table>
      </div>
    </div>
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
  