<template>
  <main class="main-content mt-0">
    <div
        class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
        style="
        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg');
        background-position: top;
      "
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white">Tsotan</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Бараа засах</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3"></div>
            <div class="card-body">
              <form role="form">
                <argon-input

                    v-model:value="product.name"
                    type="text"
                    :placeholder=product.name
                    aria-label="Name"
                    @change="onNameChange"
                />
                <argon-input
                    v-model:value="product.price"
                    type="number"
                    :placeholder=product.price
                    aria-label="number"
                    @change="onPriceChange"
                />
                <div class="form-group">
                  <label for="Category">Category</label>
                  <select class="form-control" v-model="selectedCategory"
                          @change="updateSubcategories">
                    <option value="">-- Select a Category --</option>
                    <option v-for="category in categories" :key="category.name">{{
                        category.name
                      }}
                    </option>
                  </select>

                  <select class="form-control mt-4" v-if="selectedCategory" v-model="selectedSubcategory" @change="updateSub"
                          :disabled="!selectedCategory">
                    <option value="">-- Select a Subcategory --</option>
                    <option v-for="subcategory in subcategories" :key="subcategory.name">
                      {{ subcategory.name }}
                    </option>
                  </select>



                </div>
                <label for="file">Зураг</label>
                <div>
                  <input id="image" type="file" ref="image" @change="onImageChange"/>
                </div>
                <div class="text-center">
                  <argon-button
                      @click="submitForm"
                      fullWidth
                      color="dark"
                      variant="gradient"
                      class="my-4 mb-2"
                  >Бараа засах
                  </argon-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

import api from "../../../api/product"
import categoryList from "../../category.json";
import s3 from "@/assets/s3config";

const body = document.getElementsByTagName("body")[0];


export default {
  name: "Edit",
  components: {
    ArgonInput,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  mounted() {
    this.categories = categoryList.categories;
    this.fetchData();
  },
  data() {
    return {
      id: this.$route.params.id,
      parentCategories: [],
      selectedParentCategory: '',
      subcategories: [],
      selectedSubcategory: '',
      categories: [],
      selectedCategory: '',
      product: {
        categoryId: null,
        price: 0,
        name: '',
        image: ''
      },
      deleteUrl: ''
    };
  },
  methods: {
    updateSubcategories() {

      const category = this.parentCategories.find(c => c.name === this.selectedCategory);

      if (category) {
        this.subcategories = category.subcategories;
        this.product.categoryId = category.id
      }

      console.log(this.product.categoryId);
    },
    updateSub() {
      console.log(this.selectedSubcategory);
      const subCategory = this.subcategories.find(c => c.name === this.selectedSubcategory);
      if (subCategory) this.product.categoryId = subCategory.id;
      console.log(this.product.categoryId)
    },
    onImageChange(event) {
      const file = event.target.files[0];
      const fileName = Date.now().toString();
      const bucketName = 'tsotan';

      const data = {
        Bucket: bucketName,
        Key: fileName,
        Body: file,
      };
      s3.putObject(data, (err, data) => {
        if (err) {
          console.error('Error uploading image:', err);
        } else {
          console.log('Image uploaded successfully:', data);
        }
      });

      this.product.image = "https://" + bucketName + ".s3.ap-southeast-1.amazonaws.com/" + fileName;
    },
    onNameChange(event) {
      this.product.name = event.target.value;
    },
    onPriceChange(event) {
      this.product.price = event.target.value;
    },
    async fetchData() {

      try {
        const response = await api.view(this.id);
        this.product = response.data;
        this.deleteUrl = this.product.image;
      } catch (error) {
        console.log(error);
      }

    },

    async submitForm() {
      const formData = new FormData();
      console.log("start: " + this.product.name);
      formData.append('img', this.product.image);
      formData.append('productName', this.product.name);
      formData.append('price', this.product.price);
      formData.append('categoryId', this.product.categoryId);

      // const productDTO = {
      //   'file': this.product.image,
      //   'productName': this.product.name,
      //   'price': this.product.price,
      //   'categoryId': this.product.categoryId
      // }

      try {
        await api.updateProduct(this.id, formData);
      } catch (error) {
        console.log(error)
      }
    },

    deleteImage() {
      const bucketName = 'tsotan';
      const data = {
        Bucket: bucketName,
        Key: this.deleteUrl.toString().substring(47),
      };
      s3.deleteObject(data, (err, data) => {
        if (err) {
          console.error('Error uploading image:', err);
        } else {
          console.log('Image uploaded successfully:', data);
        }
      });
    }


  },

};


</script>