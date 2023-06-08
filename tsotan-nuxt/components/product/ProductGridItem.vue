<template>
    <div>
      <ul>
        <li v-for="product in productList" :key="product.id">
          <h2>{{ product.name }}</h2>
          <p>Price: {{ product.price }}</p>
          <p>Description: {{ product.description }}</p>
          <p>Category: {{ product.category }}</p>
        </li>
      </ul>
    </div>
</template>
  
  

<script>
    import axios from 'axios';

    export default {
        created() {
            axios.get('https://rest.tsotan.mn/product/list/${id}')
                .then(response => {
                this.productList = response.data;
                })
                .catch(error => {
                console.error(error);
            });
        },
        
        data() {
            return {
                productList: []
            };
        },


        props: ["product", "layout"],

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            onClick(product) {
                this.$modal.show('quickview', product);
            },
        },
    };
</script>