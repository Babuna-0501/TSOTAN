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
        <li class="sidebar-widget-list-left" v-for="(parentCategory, index) in parentCategoryList" :key="index">
          <n-link :to="`?parent=${slugify(parentCategory)}`">
            <span class="check-mark"></span>
            {{ parentCategory }}
          </n-link>
        </li>
      </ul>
    </div>


    <div class="sidebar-widget" v-if="selectedParent">
      <h4 class="pro-sidebar-title">Categories2</h4>
      <ul class="sidebar-widget-list mt-20">
        <li class="sidebar-widget-list-left" v-for="(child, index) in childCategoryList" :key="index">
          <n-link :to="`?parent=${slugify(selectedParent)}&child=${slugify(child.toString())}`" >
            <span class="check-mark"></span>
            {{ child }}
          </n-link>
        </li>
      </ul>
    </div>


    <div class="sidebar-widget" v-if="selectedChild">
      <h4 class="pro-sidebar-title">Categories3</h4>
      <ul class="sidebar-widget-list mt-20">
        <li class="sidebar-widget-list-left" v-for="(category, index) in categoryList" :key="index">
          <n-link :to="`?parent=${slugify(selectedParent)}&child=${slugify(selectedChild)}&&category=${slugify(category)}`" >
            <span class="check-mark"></span>
            {{ category }}
          </n-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {charAt} from "core-js/internals/string-multibyte";

export default {
  props: ["classes"],

  data() {
    return {
      selectedParent: null,
      selectedChild: null,
      selectedCat: null,
    }
  },
  computed: {
    parentCategoryList() {
      return this.$store.getters.parentCategoryList
    },
    childCategoryList() {
      return this.$store.getters.childCategoryList
    },
    categoryList() {
      return this.$store.getters.categoryList
    }

  },

  watch: {
    // selectedParent() {
    //   this.childCategoryList();
    // },
    $route() {
      this.selectedParent = this.$route.query.parent;
      this.selectedChild = this.$route.query.child;
    },

  },

  methods: {
    slugify(text) {
      console.log(text);
      const a = text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          // .replace(/[^\w-]+/g, "") // Remove all non-word chars
          .replace(/--+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "") // Trim - from start of text
          .replace(/-+$/, ""); // Trim - from end of text
      console.log('a : ' + a);
      return a;
    }
  }
};
</script>