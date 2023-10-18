<template>
  <div class="formpage">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="fb" class="form-label">Facebook Name</label>
        <input
          type="text"
          class="form-control"
          id="fb"
          v-model="formData.fb"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">Утас</label>
        <input
          type="text"
          class="form-control"
          id="phoneNumber"
          v-model="formData.phoneNumber"
          required
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Хаяг</label>
        <textarea
          class="form-control"
          id="address"
          v-model="formData.address"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="comment" class="form-label"
          >Хүргэлтийн нөхцөл (Та бараа хүлээн авах өдөр, байршил, нөхцөл зэргийг
          дэлгэрэнгүй тусгана уу)</label
        >
        <textarea
          class="form-control"
          id="comment"
          v-model="formData.comment"
        ></textarea>
      </div>
      <button type="submit" class="btn border-0 formbtn btn-primary" @click.prevent="submitForm()">
        Баталгаажуулах
      </button>
    </form>
  </div>
</template>

<script>

import api from "../../api/product"
import product from "../../api/product";
export default {
  data() {
    return {
      orderId: null,
      formData: {
        fb: "",
        email: "",
        phoneNumber: "",
        address: "",
        comment: "",
        orderedProducts: "",
        price: ""
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        this.formData.orderedProducts = this.products.map(product => `${product.name}:${product.cartQuantity}`).toString();
        this.formData.price =  this.total.toFixed(2);
        this.$emit("formSubmitted", {
          ...this.formData,
        });
      } catch (error) {
        console.log(error)
      }

    },

    async createOrder() {
      try {
        const jsonStrings = this.products.map(product => `"${product.name}":"${product.cartQuantity}"`);
        const res = await api.createOrder({...this.formData, orderedProducts: jsonStrings.toString(), price: this.total.toFixed(2)});
        this.orderId = res.data.id;
      } catch (error) {
        console.log(error);
      }
    },

  },
  computed: {
    products() {
      return this.$store.getters.getCart;
    },

    total() {
      return this.$store.getters.getTotal;
    },
  },

};
</script>

<style scoped>
.formpage {
  width: 50%;
}

.formpage .form-group input {
  background-color: #f6f6f6;
}
.formpage .formbtn {
  background-color: #60445d;
  color: #ffffff;
  display: block;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  padding: 18px 20px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50px;
  z-index: 9;
  width: 100%;
}
</style>
