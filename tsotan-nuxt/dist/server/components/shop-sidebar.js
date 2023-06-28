exports.ids = [45];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=template&id=549d4952&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"sidebar-style",class:_vm.classes,staticStyle:{"display":"flex","flex-direction":"column","gap":"40px"}},[_vm._ssrNode("<div class=\"sidebar-widget\"><h4 class=\"pro-sidebar-title\">Search</h4> <div class=\"pro-sidebar-search mb-50 mt-25\"><form class=\"pro-sidebar-search-form\"><input type=\"text\" placeholder=\"Search here...\"> <button><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Үндсэн Категори</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.parentCategoryList.map(item=>item.name),function(parentCategory,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?parent=${_vm.slugify(String(parentCategory))}`}},[_c('span',{staticClass:"check-mark"}),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v(_vm._s(parentCategory))])])],1);}),0)],2),_vm._ssrNode(" "),_vm.childCategoryList.length?_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Дэд Категори</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.childCategoryList.map(item=>item.name),function(child,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?parent=${_vm.slugify(String(_vm.selectedParent))}&child=${_vm.slugify(String(child))}`}},[_c('span',{staticClass:"check-mark"}),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v(_vm._s(child))])])],1);}),0)],2):_vm._e(),_vm._ssrNode(" "),_vm.categoryList.length?_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Дэд Категори 2</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.categoryList.map(item=>item.name),function(category,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?parent=${_vm.slugify(String(_vm.selectedParent))}&child=${_vm.slugify(String(_vm.selectedChild))}&category=${_vm.slugify(String(category))}`}},[_c('span',{staticClass:"check-mark"}),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v(_vm._s(category))])])],1);}),0)],2):_vm._e()],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=template&id=549d4952&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ../api/product.js
const url="https://rest.tsotan.mn";/* harmony default export */ var product = ({async createProduct(data){return external_axios_default.a.post(`${url}/product/create-with-img`,data);// return axios.post(`${url}/product/create-with-img`, data);
},async updateProduct(id,data){// return axios.post(`${url}/product/update/${id}`, data,  {headers: {'Content-Type': 'multipart/form-data'}});
return external_axios_default.a.post(`${url}/product/update/${id}`,data);},async getProductList(id){return external_axios_default.a.get(`${url}/product/list/${id}`);},async login(data){return external_axios_default.a.post(`${url}/user/login`,data);},async view(id){return external_axios_default.a.get(`${url}/product/view/${id}`);},async deleteProduct(id){return external_axios_default.a.delete(`${url}/product/delete/${id}`);},async getCategories(){return external_axios_default.a.get(`${url}/category/list-names`);},async getCategoriesByParent(id){return external_axios_default.a.get(`${url}/category/list/${id}`);}});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var ShopSidebarvue_type_script_lang_js_ = ({props:["classes"],data(){return{childCategoryList:[],categoryList:[],childNames:[],selectedParent:null,selectedChild:null,selectedCat:null};},computed:{parentCategoryList(){return this.$store.getters.parentCategoryList;}// async selectedParent() {
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
},watch:{$route(){this.selectedParent=this.$route.query.parent;this.selectedChild=this.$route.query.child;if(this.selectedParent){this.categoryList=[];this.fetchChildCategories();}if(this.selectedChild){this.fetchCategories();}}},methods:{async fetchChildCategories(){const sub=this.parentCategoryList.filter(c=>this.slugify(String(c.name))===this.selectedParent);const id=sub.map(item=>item.id);this.childCategoryList=await this.fetch(id);},async fetchCategories(){const sub=this.childCategoryList.filter(c=>this.slugify(String(c.name))===this.selectedChild);const id=sub.map(item=>item.id);this.categoryList=await this.fetch(id);},async fetch(id){const result=await product.getCategoriesByParent(id);return result.data;},slugify(text){const a=text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"")// Trim - from end of text
.replace(/,+/,"");// console.log('a : ' + a);
return a;}}});
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopSidebarvue_type_script_lang_js_ = (ShopSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShopSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8ae7cc62"
  
)

/* harmony default export */ var ShopSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shop-sidebar.js.map