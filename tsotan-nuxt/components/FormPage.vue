<template>
  <div class="formpage">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="facebookName" class="form-label">Facebook Name</label>
        <input
          type="text"
          class="form-control"
          id="facebookName"
          v-model="formData.facebookName"
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
        <label for="phone" class="form-label">Утас</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          v-model="formData.phone"
          required
        />
      </div>
      <div class="mb-3">
        <label for="additionalInfo" class="form-label">Нэмэлт мэдээлэл</label>
        <textarea
          class="form-control"
          id="additionalInfo"
          v-model="formData.additionalInfo"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="additionalInfo" class="form-label"
          >Хүргэлтийн нөхцөл (Та бараа хүлээн авах өдөр, байршил, нөхцөл зэргийг
          дэлгэрэнгүй тусгана уу)</label
        >
        <textarea
          class="form-control"
          id="option"
          v-model="formData.option"
        ></textarea>
      </div>
      <button type="submit" class="btn border-0 formbtn btn-primary">
        Баталгаажуулах
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        facebookName: "",
        email: "",
        phone: "",
        additionalInfo: "",
        option: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("formSubmitted", this.formData);
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
