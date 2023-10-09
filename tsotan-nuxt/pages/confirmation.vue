<template>
  <div class="cart-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="Баталгаажуулах" />

    <div class="checkout-area pt-95 pb-100">
      <div class="container">
        <h1>Захиалга баталгаажуулах</h1>
        <product-payment-timer />
        <div class="row mt-4">
          <div class="confirmWrapper">
            <p v-if="$route.query.facebookName">
              <strong>Facebook Name:</strong> {{ $route.query.facebookName }}
            </p>
            <p v-if="$route.query.email">
              <strong>Email:</strong> {{ $route.query.email }}
            </p>
            <p v-if="$route.query.phone">
              <strong>Утас:</strong> {{ $route.query.phone }}
            </p>
            <p v-if="$route.query.additionalInfo">
              <strong>Нэмэлт мэдээлэл:</strong>
              {{ $route.query.additionalInfo }}
            </p>
            <p v-if="$route.query.option">
              <strong>Хүргэлтийн нөхцөл:</strong>
              {{ $route.query.option }}
            </p>
          </div>
          <div class="col-lg-5">
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
                          >${{ product.total.toFixed(2) }}</span
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
                      <li>${{ total.toFixed(2) }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="qpay row mt-4">
          <div class="confirmWrapper">
            <h2>Qpay энд байрлана</h2>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
    ProductPaymentTimer: () => import("@/components/ProductPaymentTimer"),
  },
  computed: {
    products() {
      return this.$store.getters.getCart;
    },

    total() {
      return this.$store.getters.getTotal;
    },
  },
  head() {
    return {
      title: "Confirmation",
    };
  },
  mounted() {
    console.log("$route.query:", this.$route.query);
  },
  props: {
    formData: Object,
  },
};
</script>
<style scoped>
.confirmWrapper {
  width: 50%;
  background-color: #f6f6f6;
  padding: 40px;
  font-size: 15px;
}
.qpay {
}
</style>
