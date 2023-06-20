<template>
  <div class="sidebar-style" :class="classes">
    <div class="sidebar-widget">
      <h4 class="pro-sidebar-title">Search</h4>
      <div class="pro-sidebar-search mb-50 mt-25">
        <form class="pro-sidebar-search-form">
          <input type="text" placeholder="Search here...">
          <button>
            <i class="pe-7s-search"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- category widget  -->
    <div class="sidebar-widget">
      <h4 class="pro-sidebar-title">Categories1</h4>
      <ul class="sidebar-widget-list mt-20">
        <li class="sidebar-widget-list-left" v-for="(parentCategory, index) in parentCategoryList.map(item => item.name)" :key="index">
          <n-link :to="`?parent=${slugify(String(parentCategory))}`">
            <span class="check-mark"></span>
              <option value="">{{ parentCategory }}</option>
          </n-link>
        </li>
      </ul>
    </div>


    <div class="sidebar-widget" v-if="childCategoryList.length">
      <h4 class="pro-sidebar-title">Categories2</h4>
      <ul class="sidebar-widget-list mt-20">
        <li class="sidebar-widget-list-left" v-for="(child, index) in childCategoryList.map(item=>item.name)" :key="index">
          <n-link :to="`?parent=${slugify(String(selectedParent))}&child=${slugify(String(child))}`" >
            <span class="check-mark"></span>
              <option value="">{{ child }}</option>
              <!-- Add more options if needed -->
          </n-link>
        </li>
      </ul>
    </div>


    <div class="sidebar-widget" v-if="categoryList.length">
      <h4 class="pro-sidebar-title">Categories3</h4>
      <ul class="sidebar-widget-list mt-20">
        <li class="sidebar-widget-list-left" v-for="(category, index) in categoryList.map(item=>item.name)" :key="index">
          <n-link :to="`?parent=${slugify(String(selectedParent))}&child=${slugify(String(selectedChild))}&category=${slugify(String(category))}`" >
            <span class="check-mark"></span>
              <option value="">{{ category }}</option>
              <!-- Add more options if needed -->
          </n-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import api from "../../api/product"

export default {
  props: ["classes"],

  data() {
    return {
      childCategoryList: [],
      categoryList: [],
      childNames: [],
      selectedParent: null,
      selectedChild: null,
      selectedCat: null,
    }
  },
  computed: {

    parentCategoryList() {
      return this.$store.getters.parentCategoryList;
    },


    // async selectedParent() {
    //   const sub = this.parentCategories.find(c => c.name === this.selectedParent);
    //   console.log("update child");
    //   console.log(sub);
    //   this.childCategoryList = await this.fetchChildCategories(sub.id).map(item=>item.name);
    // },
    //
    // async selectedChild() {
    //   const sub = this.childCategoryList.find(c => c.name === this.selectedChild)
    //   this.categoryList = await this.fetchChildCategories(sub.id);
    // }
    // childCategoryList() {
    //   return this.$store.getters.childCategoryList
    // },
    // categoryList() {
    //   return this.$store.getters.categoryList
    // }

  },

  watch: {

    $route() {
      this.selectedParent = this.$route.query.parent;
      this.selectedChild = this.$route.query.child;

      if(this.selectedParent) {
        this.categoryList=[];
        this.fetchChildCategories();
      }
      if(this.selectedChild) {
        this.fetchCategories();
      }
    }
  },

  methods: {

    async fetchChildCategories() {
      const sub = this.parentCategoryList.filter(c => this.slugify(String(c.name)) === this.selectedParent);
      const id = sub.map(item => item.id);
      this.childCategoryList = await this.fetch(id);
    },

    async fetchCategories() {
      const sub = this.childCategoryList.filter(c => this.slugify(String(c.name)) === this.selectedChild);
      const id = sub.map(item => item.id);
      this.categoryList = await this.fetch(id);
    },

    async fetch(id) {
      const result = await api.getCategoriesByParent(id);
      return result.data;
    },

    slugify(text) {
      const a = text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          // .replace(/[^\w-]+/g, "") // Remove all non-word chars
          .replace(/--+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "") // Trim - from start of text
          .replace(/-+$/, "") // Trim - from end of text
          .replace(/,+/, "");
      // console.log('a : ' + a);
      return a;
    }
  }
};
</script>