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
                        <li v-for="product in products" :key="product.id" class="d-flex"
                            style="align-items: center; gap: 20px;">
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <img :src=getImg(product.imgUrl) class="w-20"/>
                                    </div>
                                </div>

                            </td>
                            <td class="text-sm font-weight-bold mb-0">
                                {{ product.name }}
                            </td>
                            <td class="align-middle text-center text-sm">
                                {{ product.price }} ₮
                            </td>

                            <td class="align-middle text-center text-sm">
                                {{ product.category }} ₮
                            </td>
                            <td class="align-middle">
                                <a
                                        :href=getEditUrl(product.id)
                                        class="text-secondary font-weight-bold text-xs"
                                        data-toggle="tooltip"
                                        data-original-title="Edit user"
                                >Edit</a>
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
import axios from 'axios';
import categoryList from "../../../../category.json";

export default {
    data() {
        return {
            products: [],
            selectedCategory: '',
            selectedSubcategory: '',
            loading: true,
            categories: [],
            subCategories: [],
            categoryId: 1000
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
            axios.get(`https://ec2-13-250-36-132.ap-southeast-1.compute.amazonaws.com:8080/product/list/${this.categoryId}`)
                .then(response => {
                    this.products = response.data;
                    this.loading = false;
                })
                .catch(error => {
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
  