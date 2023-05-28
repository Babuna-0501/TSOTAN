<template>
  <div class="card col-10 px-4">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
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
            <select class="my-2 text-sm font-weight-bold mb-0" v-model="selectedCategory"
                    @change="onCategoryChange">
              <option value="">-- Select a Category --</option>
              <option v-for="category in categories" :key="category.name">{{
                  category.name
                }}
              </option>
            </select>

            <select class="my-2 text-sm font-weight-bold mb-0" v-model="selectedSubcategory" @change="updateSub"
                    :disabled="!selectedCategory">
              <option value="">-- Select a Subcategory --</option>
              <option v-for="subcategory in subCategories" :key="subcategory.name">
                {{ subcategory.name }}
              </option>
            </select>
          </div>
          <thead>
          <tr>
            <th></th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
            <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            ></th>
            <th class="text-secondary opacity-7"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <li v-for="product in products" :key="product.id" class="d-flex list"
                style="align-items: center; gap: 1vw;">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img :src=product.imgUrl class="w-20"/>
                  </div>
                </div>

              </td>
              <td class="font-weight-bold mb-0 price">
                {{ product.name }}
              </td>
              <td class="align-middle text-center price">
                {{ product.price }} ₮
              </td>

              <td class="align-middle text-center text-sm">
                {{ product.category }} 
              </td>
              <td class="align-middle edit_prod">
                <a
                    :href=getEditUrl(product.id)
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                ><button class="edit_btn">Edit</button></a>
              </td>
              <td class="align-middle delete_prod">
                <button class="dlt_btn" @click="deleteProduct(product.id) ">Delete</button>
              </td>
            </li>
          </tr>
          </tbody>
          <div v-if="loading">Loading...</div>
          <ul v-else>

          </ul>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import categoryList from "../../../../category.json";
import api from "../../assets/api/product";

export default {
  data() {
    return {
      products: [],
      selectedCategory: '',
      selectedSubcategory: '',
      loading: true,
      categories: [],
      subCategories: [],
      categoryId: 100
    }
  },
  mounted() {
    this.categories = categoryList.categories;
    this.fetchData();
  },
  methods: {
    onCategoryChange() {
      const category = this.categories.find(c => c.name === this.selectedCategory);
      this.categoryId = category.id;
      this.updateSubcategories();
      this.fetchData();
    },
    async fetchData() {
      try {
        this.loading = true;
        const response = await api.getProductList(this.categoryId);
        this.products = response.data;
      } catch (error) {
        console.log(error)
      }
      this.loading = false;

    },

    async deleteProduct() {
      try {
        await api.deleteProduct(this.id);
        await this.fetchData();
      } catch (error) {
        console.log(error)
      }
    },

    // getImg(imgUrl) {
    //   return "data:image/png;base64," + imgUrl;
    // },
    getEditUrl(id) {
      return "../edit/" + id;
    },
    updateSubcategories() {

      const category = this.categories.find(c => c.name === this.selectedCategory);

      if(category) {
        this.subCategories = category.subcategories;
        this.categoryId = category.id
      }

      console.log(this.categoryId);
    },
    updateSub() {
      console.log(this.selectedSubcategory);
      const subCategory = this.subCategories.find(c => c.name === this.selectedSubcategory);
      if(subCategory) this.categoryId = subCategory.id;
      console.log(this.categoryId)
      this.fetchData();
    },
  }
}
</script>
  
<style>
.table-responsive {
  overflow: hidden !important;
}
.list {
  height: 120px;
}
.list .price {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
}
.list td {
  width: 9vw;
  white-space: break-spaces !important;
}
.list .edit_prod {
  width:11vw;
  justify-content: center;
  display: flex;
}

.list .edit_btn {
  display: inline-block;
  background-color: #4CAF50; /* Green background */
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.list .dlt_btn {
  display: inline-block;
  background-color: #5342a1; /* Green background */
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
</style>