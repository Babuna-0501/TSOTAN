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
              <h5>Бараа нэмэх</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3"></div>
            <div class="card-body">
              <form role="form">
                <argon-input
                  type="text"
                  placeholder="Барааны нэр"
                  aria-label="Name"
                />
                <argon-input
                  type="number"
                  placeholder="Үнэ"
                  aria-label="number"
                />
                <div class="form-group">
                  <label for="Category">Category</label>
                  <select class="form-control" v-model="selectedCategory" @change="updateSubcategories">
                    <option value="">-- Select a Category --</option>
                    <option v-for="category in categories" :key="category.name">{{ category.name }}</option>
                  </select>
                  
                  <select class="form-control mt-4" v-model="selectedSubcategory" :disabled="!selectedCategory">
                    <option value="">-- Select a Subcategory --</option>
                    <option v-for="subcategory in subcategories" :key="subcategory.name">{{ subcategory.name }}</option>
                  </select>
                </div>
                <label for="file">Зураг</label>


                <form action="/file-upload" class="form-control dropzone" id="dropzone">
                    <div class="fallback">
                        <input name="file" type="file" multiple />
                    </div>
                </form>

                <div class="text-center">
                  <argon-button
                    fullWidth
                    color="dark"
                    variant="gradient"
                    class="my-4 mb-2"
                    >Бараа нэмэх</argon-button
                  >
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

import categoryList from "@/assets/category.json";

const body = document.getElementsByTagName("body")[0];


export default {
  name: "signin",
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
  data() {
    return {
      categories: [],
      selectedCategory: '',
      subcategories: [],
      selectedSubcategory: '',
    };
  },
  methods: {
      mounted() {
          this.categories = categoryList.categories;
      },
    updateSubcategories() {
      const category = this.categories.find(c => c.name === this.selectedCategory);
      
      if (category) {
        this.subcategories = category.subcategories;
      } else {
        this.subcategories = [];
      }
      
      this.selectedSubcategory = '';
    },
  },
};
 
 
</script>
