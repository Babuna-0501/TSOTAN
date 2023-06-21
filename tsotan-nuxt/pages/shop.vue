<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="дэлгүүр"/>

    <!-- product items wrapper -->
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <!-- shop top bar -->
            <div class="shop-top-bar">
              <div class="select-showing-wrap">
                <div class="shop-select">
                  <select v-model="selectedPrice">
                    <option value="default">Үнээр эрэмблэх</option>
                    <option value="low2high">Үнэ - Багаас их рүү</option>
                    <option value="high2low">Үнэ - Ихээс бага руу</option>
                  </select>
                </div>
                <p>Showing {{ perPage * currentPage - perPage + 1 }} to
                  {{ perPage * currentPage > filterItems.length ? filterItems.length : perPage * currentPage }} of
                  {{ filterItems.length }} result</p>
              </div>
              <div class="shop-tab">
                <button @click="layout = 'twoColumn'" :class="{ active : layout === 'twoColumn' }">
                  <i class="fa fa-th-large"></i>
                </button>
                <button @click="layout = 'threeColumn'" :class="{ active : layout === 'threeColumn' }">
                  <i class="fa fa-th"></i>
                </button>
                <button @click="layout = 'list'" :class="{ active : layout === 'list' }">
                  <i class="fa fa-list-ul"></i>
                </button>
              </div>
            </div>
            <!-- end shop top bar -->

            <!-- shop product -->
            <div class="shop-bottom-area mt-35">
              <n-link to="/product/product-detail">
                <div class="row product-layout"
                    :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                  <div class="col-xl-4 col-sm-6" v-for="(product, index) in getItems" :key="index">
                    <ProductGridItem :product="product" :layout="layout"/>
                  </div>
                </div>
              </n-link>
            </div>
            <!-- end shop product -->

            <div v-if="getPaginateCount > 1">
              <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage"
                          :records="filterItems.length" @paginate="paginateClickCallback"
                          :page-count="getPaginateCount"/>
            </div>
          </div>

          <div class="col-lg-3">
            <ShopSidebar classes="mr-30"/>
          </div>
        </div>
      </div>
    </div>
    <!-- end product items wrapper -->

    <QuickView/>
    <TheFooter/>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
import ShopSidebar from "../components/ShopSidebar.vue";

export default {
  components: {
    ShopSidebar,
    HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    ProductGridItem: () => import('@/components/product/ProductGridItem'),
    QuickView: () => import('@/components/QuickView'),
    TheFooter: () => import('@/components/TheFooter'),
  },

  data() {
    return {
      layout: "threeColumn",
      filterItems: [],
      prevSelectedParentName: '',
      prevSelectedChildName: '',
      prevSelectedCategoryName: '',
      currentPage: 1,
      perPage: 9,
      selectedPrice: 'default'
    }
  },

  computed: {
    products() {
      return this.$store.getters.getProducts
    },

    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.filterItems.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.filterItems.length / this.perPage);
    },
  },

  mounted() {
    this.fetchData();
    this.updateProductData()
  },

  methods: {
    ...mapActions(['fetchProducts']),
    ...mapActions(['fetchCategories']),
    async fetchData() {
      await this.fetchProducts();
      await this.fetchCategories();
    },

    paginateClickCallback(page) {
      this.currentPage = Number(page);
    },

    updateProductData() {
      this.paginateClickCallback(1);

      const parent = this.$route.query.parent;
      const child = this.$route.query.child;
      const category = this.$route.query.category;
      // const sizeName = this.$route.query.size;
      // const colorName = this.$route.query.color;
      // const tagName = this.$route.query.tag;

      if (Object.keys(this.$route.query).length === 0) {
        this.filterItems = [...this.products]
      }

      if (!parent) {
        this.filterItems = [...this.products]
      }

      if (parent && this.prevSelectedParentName !== parent) {
          const resultData = this.products.filter((item) => this.slugify(item.parentCategory).includes(parent));
          this.filterItems = [];
          this.filterItems.push(...resultData);
      }

      if (child && this.prevSelectedChildName !== child) {
          const resultData = this.products.filter((item) => (this.slugify(item.parentCategory).includes(parent) &&
              this.slugify(item.childCategory).includes(child)) );
          this.filterItems = [];
          this.filterItems.push(...resultData);
      }

      if (category && this.prevSelectedCategoryName !== category) {
        const resultData = this.products.filter((item) =>
            (this.slugify(item.parentCategory).includes(parent) &&
                (this.slugify(item.childCategory).includes(child))) &&
            (this.slugify(item.category).includes(category)) );
        this.filterItems = [];
        this.filterItems.push(...resultData);
      }


      this.prevSelectedParentName = parent;
      this.prevSelectedChildName = child;
      this.prevSelectedCategoryName = category;

    },

    slugify(text) {
      return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          // .replace(/[^\w-]+/g, "") // Remove all non-word chars
          .replace(/--+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "")
          .replace(/,+/, "")  // Trim - from start of text
          .replace(/-+$/, ""); // Trim - from end of text
    }
  },

  watch: {
    $route() {
      this.updateProductData()
    },

    selectedPrice() {
      switch (this.selectedPrice) {
        case "low2high":
          this.filterItems = this.filterItems.sort((a, b) => a.price - b.price)
          break;
        case "high2low":
          this.filterItems = this.filterItems.sort((a, b) => b.price - a.price)
          break;
        default:
          this.filterItems = [...this.products]
      }
    }
  },

  head() {
    return {
      title: "Shop grid standard"
    }
  },
};
</script>
