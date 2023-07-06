<template>
  <div>
    <ul>
      <li>
        <h2>{{ product.name }}</h2>
        <p>Үнэ: {{ product.price }} ₮</p>

        <div class="product-details-img">
          <div class="product-badges">
            <span class="product-label pink" v-if="product.isNew">New</span>
            <span class="product-label purple" v-if="product.isSpecial">Special</span>
          </div>
          <img class="img-fluid" :src=getImg(product.img) :alt="product.name" @click="handleProductClick(product.id)">
        </div>
        <p>Категори: {{ product.parentCategory }}</p>
      </li>
    </ul>
  </div>
</template>


<script>

export default {

  props: ["product", "layout"],

  methods: {
    handleProductClick(productId) {
      this.$router.push(`/product/product-detail/${productId}`);
    },
    addToCart(product) {
      const prod = {...product, cartQuantity: 1}
      // for notification
      if (this.$store.state.cart.find(el => product.id === el.id)) {
        this.$notify({title: 'Already added to cart update with one'})
      } else {
        this.$notify({title: 'Add to cart successfully!'})
      }

      this.$store.dispatch('addToCartItem', prod)
    },

    onClick(product) {
      this.$modal.show('quickview', product);
    },

    getImg(imgUrl) {
      return imgUrl;
    },
  },
};
</script>