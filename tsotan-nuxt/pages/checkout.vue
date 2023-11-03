<template>
  <div class="cart-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="Төлбөр төлөх" />

    <!-- checkout section start -->
    <div class="checkout-area pt-95 pb-100">
      <div class="container">
        <h3 class="mb-5">Таны захиалга</h3>
        <div class="row" v-if="products.length > 0">
          <FormPage @formSubmitted="handleFormSubmitted" />
          <div class="col-lg-5 mt-4">
            <div class="your-order-area">
              <div class="your-order-wrap gray-bg-4">
                <div class="your-order-product-info">
                  <div class="your-order-top">
                    <ul>
                      <li>Бараа</li>
                      <li>Нийт үнэ</li>
                    </ul>
                  </div>
                  <div class="your-order-middle">
                    <ul>
                      <li v-for="(product, index) in products" :key="index">
                        <span class="order-middle-left"
                          >{{ product.name }} X {{ product.cartQuantity }}</span
                        >
                        <span class="order-price"
                          >{{ product.total.toFixed(2) }}₮</span
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="your-order-bottom">
                    <ul>
                      <li class="your-order-shipping">Хүргэлт</li>
                      <li>+5000</li>
                    </ul>
                  </div>
                  <div class="your-order-total">
                    <ul>
                      <li class="order-total">Нийт</li>
                      <li>{{ total.toFixed(2) }}₮</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-12">
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-cash"></i>
              </div>
              <h4>Таны сагсанд бараа байхгүй байна</h4>
              <n-link to="/shop" class="empty-cart__button">Дэлгүүр</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- The Modal -->
    <!-- checkout section end -->
    <TheFooter />
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
    FormPage: () => import("@/components/FormPage"),
    Confirm: () => import("./confirmation.vue"),
  },
  computed: {
    products() {
      return this.$store.getters.getCart;
    },

    total() {
      return this.$store.getters.getTotal;
    },
  },
  data() {
    return {
      formData: {
        fb: "",
        email: "",
        phoneNumber: "",
        address: "",
        comment: "",
        orderId: ""
      },
    };
  },

  methods: {
    handleFormSubmitted(formData) {
      this.$router.push({
        name: "confirmation",
        params: { formData },
      });
    },
  },

  head() {
    return {
      title: "Checkout",
    };
  },
};
</script>

<style>
.address {
  width: 50%;
}
.form-group {
  margin-bottom: 20px;
}
</style>
