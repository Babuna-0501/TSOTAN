<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Бараа нэмэх</h3>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div class="card-body">
        <form role="form">
          <Input
            class="input"
            v-model:value="product.name"
            type="text"
            placeholder="Нэр"
            aria-label="Name"
            @change="onNameChange"
          />
          <Input
            class="input"
            v-model:value="product.price"
            type="number"
            :placeholder="product.price"
            aria-label="number"
            @change="onPriceChange"
          />
          <div class="form-group select_cat">
            <label for="Category"></label>
            <select
              class="form-control"
              v-model="selectedCategory"
              @change="updateSubcategories"
            >
              <option value="">-- Select a Category --</option>
              <option v-for="category in categories" :key="category.name">
                {{ category.name }}
              </option>
            </select>

            <select
              class="form-control mt-4"
              v-model="selectedSubcategory"
              @change="updateSub"
              :disabled="!selectedCategory"
            >
              <option value="">-- Select a Subcategory --</option>
              <option
                v-for="subcategory in subcategories"
                :key="subcategory.name"
              >
                {{ subcategory.name }}
              </option>
            </select>
          </div>
          <label for="file"></label>
          <div class="image_input">
            <input id="file" type="file" ref="image" @change="onImageChange" />
          </div>
            <button
              class="button"
              @click="submitForm"
              >Бараа нэмэх
            </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import axios from "axios";
import categoryList from "../../category.json";



export default {
    name: "",
    components: {
        Input,
    },
    mounted() {
        this.categories = categoryList.categories;
    },
    data() {
        return {
            categories: [],
            selectedCategory: '',
            subcategories: [],
            selectedSubcategory: '',
            product: {
                categoryId: null,
                price: 0,
                name: '',
                image: ''
            }
        };
    },
    methods: {
        updateSubcategories() {

            const category = this.categories.find(c => c.name === this.selectedCategory);

            if(category) {
                this.subcategories = category.subcategories;
                this.product.categoryId = category.id
            }

            console.log(this.product.categoryId);
        },
        updateSub() {
            console.log(this.selectedSubcategory);
            const subCategory = this.subcategories.find(c => c.name === this.selectedSubcategory);
            if(subCategory) this.product.categoryId = subCategory.id;
            console.log(this.product.categoryId)
        },
        onImageChange(event) {
            this.product.image = event.target.files[0];
        },
        onNameChange(event) {
          this.product.name = event.target.value;
        },
        onPriceChange(event) {
            this.product.price = event.target.value;
        },
        async submitForm() {
          const formData = new FormData();
          console.log("start: " + this.product.name);
          console.log("id" + this.id);
          formData.append("file", this.product.image);
          formData.append("productName", this.product.name);
          formData.append("price", this.product.price);
          formData.append("categoryId", this.product.categoryId);
          axios
            .post(`https://rest.tsotan.mn/product/create-with-img`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        },

    },

};
</script>

<style>
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
}
.input {
    width: 23%;
    border: 1px solid #878682;
    padding: 5px;
    border-radius: 10px;
}

input {
    background: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}
/* Disable active black color for input elements */
input:focus {
  outline: none;
}

select:focus {
  outline: none;
}

select {
    width: 50%;
    border: 1px solid #878682;
    padding: 5px;
    border-radius: 10px;
}
.select_cat {
    width: 50%;
    border: 1px solid #2e2e2d;
    padding: 5px;
    border-radius: 10px;
    gap: 10px;
}
.image_input {
    width: 50%;
}
.button {
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
</style>
