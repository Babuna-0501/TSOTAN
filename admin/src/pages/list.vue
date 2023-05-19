<template>
  <div class="main">
    <h3 class="text-2xl font-bold text-left py-2">Жагсаалт</h3>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <table class="table align-items-center mb-0">
        <!--                    <div class="form-group">-->
        <!--                    <select v-model="selectedCategory" class="my-2 text-sm font-weight-bold mb-0" @change="onCategoryChange">-->
        <!--                        <option value="">All Categories</option>-->
        <!--                        <option v-for="category in categories" :key="category.name">{{ category.name }}</option>-->
        <!--                    </select>-->
        <!--                    <select v-model="selectedSubCategory" class="my-2 text-sm font-weight-bold mb-0" @change="updateSub" :disabled="!selectedCategory">-->
        <!--                        <option value=""></option>-->
        <!--                        <option v-for="subcategory in subCategories" :key="subcategory.name">-->
        <!--                            {{ subcategory.name }}-->
        <!--                        </option>-->
        <!--                    </select>-->
        <!--                    </div>-->
        <div class="form-group">
          <select
            class="my-2 text-sm font-weight-bold mb-0"
            v-model="selectedCategory"
            @change="onCategoryChange"
          >
            <option value="">-- Select a Category --</option>
            <option v-for="category in categories" :key="category.name">
              {{ category.name }}
            </option>
          </select>

          <select
            class="my-2 text-sm font-weight-bold mb-0"
            v-model="selectedSubcategory"
            @change="updateSub"
            :disabled="!selectedCategory"
          >
            <option value="">-- Select a Subcategory --</option>
            <option
              v-for="subcategory in subCategories"
              :key="subcategory.name"
            >
              {{ subcategory.name }}
            </option>
          </select>
        </div>
        <thead>
          <tr>
            <th></th>
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            ></th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            ></th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <li
              v-for="product in products"
              :key="product.id"
              class="d-flex li-ct"
              style="align-items: center; gap: 20px"
            >
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img :src="getImg(product.imgUrl)" style="width: 180px" />
                  </div>
                </div>
              </td>
              <td
                class="text-md font-weight-bold mb-0"
                style="vertical-align: middle"
              >
                {{ product.name }}
              </td>
              <td class="align-middle text-center text-md">
                {{ product.category }} ₮
              </td>
              <td class="align-middle text-center text-md">
                {{ product.price }} ₮
              </td>
              <td class="align-middle">
               
                  <a 
                    :href="getEditUrl(product.id)"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                    ><button>Edit      </button></a
                  >
          
              </td>
              <td>
                <button class="red">Устгах</button>
              </td>
            </li>
          </tr>
        </tbody>
        <div v-if="loading">Loading...</div>
        <ul v-else></ul>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import categoryList from "../../category.json";

export default {
  data() {
    return {
      products: [],
      selectedCategory: "",
      selectedSubcategory: "",
      loading: true,
      categories: [],
      subCategories: [],
      categoryId: 1000,
    };
  },
  mounted() {
    this.categories = categoryList.categories;
    this.fetchData();
  },
  methods: {
    onCategoryChange() {
      const category = this.categories.find(
        (c) => c.name === this.selectedCategory
      );
      this.categoryId = category.id;
      this.updateSubcategories();
      this.fetchData();
    },
    async fetchData() {
      axios
        .get(`https://api.tsotan.mn/product/list/${this.categoryId}`)
        .then((response) => {
          this.products = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    getImg(imgUrl) {
      return "data:image/png;base64," + imgUrl;
    },
    getEditUrl(id) {
      return "../edit/" + id;
    },
    updateSubcategories() {
      const category = this.categories.find(
        (c) => c.name === this.selectedCategory
      );

      if (category) {
        this.subCategories = category.subcategories;
        this.categoryId = category.id;
      }

      console.log(this.categoryId);
    },
    updateSub() {
      console.log(this.selectedSubcategory);
      const subCategory = this.subCategories.find(
        (c) => c.name === this.selectedSubcategory
      );
      if (subCategory) this.categoryId = subCategory.id;
      console.log(this.categoryId);
      this.fetchData();
    },
  },
};
</script>

<style>
.main {
  list-style-type: none;
}
li {
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}
.li-ct {
  margin-top: 50px;
}
button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #5342a1;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  margin-left: 13%;
}
.red {
  background-color: #e36959;
}
</style>
