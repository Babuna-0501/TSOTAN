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
            <p v-if="formData.fb">
              <strong>Facebook Name:</strong> {{ formData.fb}}
            </p>
            <p v-if="formData.email">
              <strong>Email:</strong> {{formData.email }}
            </p>
            <p v-if="formData.phoneNumber">
              <strong>Утас:</strong> {{ formData.phoneNumber }}
            </p>
            <p v-if="formData.address">
              <strong>Хаяг:</strong>
              {{formData.address }}
            </p>
            <p v-if="formData.comment">
              <strong>Хүргэлтийн нөхцөл:</strong>
              {{ formData.comment }}
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
            <img v-if="invoice" class="default-img" :src="'data:image/png;base64,' + invoice.qr_image" :alt="invoice.qPay_shortUrl">
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import api from "../../api/product";

export default {
  components: {
    HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
    ProductPaymentTimer: () => import("@/components/ProductPaymentTimer"),
  },

  data() {
    return {
      invoice: null,
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
    async createInvoice() {
      try {
        if (!this.formData.orderId) {
          console.error('Invalid orderId');
          return;
        }
        const res = await api.createInvoice(this.formData.orderId);
        if (res.status >= 200 && res.status < 300) {
          this.invoice = res.data;
        } else {
          console.error('Failed to create invoice', res.status, res.statusText);
        }
      } catch (error) {
        console.error('An error occurred while creating the invoice:', error);
      }
    }
  },

  mounted() {
    this.formData = this.$route.params.formData;
    this.createInvoice();
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
