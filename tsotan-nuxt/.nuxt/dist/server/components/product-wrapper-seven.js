exports.ids = [45,36,49];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapperSeven.vue?vue&type=template&id=c95e6868&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-area product-mb-xs pt-100 pb-100"},[_c('client-only',[_c('div',{staticClass:"container"},[_c('SectionTitleWithSubTitle',{attrs:{"classes":"section-title-6","title":"New Arrivals"}}),_vm._v(" "),_c('ul',{staticClass:"product-tab-list nav justify-content-center pt-25 pb-60"},_vm._l(_vm.filterCategory,function(cat,index){return _c('li',{key:index,staticClass:"nav-item",on:{"click":function($event){return _vm.filterHandler(cat);}}},[_c('button',{class:{'active':cat===_vm.selectedCategory}},[_vm._v(_vm._s(cat))])]);}),0),_vm._v(" "),_c('div',{staticClass:"row"},_vm._l(_vm.filterData.slice(0,8),function(product,index){return _c('div',{key:index,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[_c('ProductGridItemTwo',{attrs:{"product":product}})],1);}),0),_vm._v(" "),_c('div',{staticClass:"discover-more-btn btn-hover text-center mt-20 col-12"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("Discover More")])],1)],1)]),_vm._ssrNode(" "),_c('QuickView')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductWrapperSeven.vue?vue&type=template&id=c95e6868&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapperSeven.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductWrapperSevenvue_type_script_lang_js_ = ({data(){return{filterData:[],selectedCategory:''};},components:{ProductGridItemTwo:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 58)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57))},computed:{products(){return this.$store.getters.getProducts;},filterCategory(){return['all',...new Set(this.products.map(elem=>elem.category).flat())];}},methods:{filterHandler(cat){this.selectedCategory=cat;if(this.selectedCategory==="all"){this.filterData=this.products;}else{let filterResult=this.products.filter(item=>item.category.includes(cat));this.filterData=[];this.filterData.push(...filterResult);}}},mounted(){this.filterData.push(...this.products);}});
// CONCATENATED MODULE: ./components/product/ProductWrapperSeven.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWrapperSevenvue_type_script_lang_js_ = (ProductWrapperSevenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/product/ProductWrapperSeven.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWrapperSevenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5394b993"
  
)

/* harmony default export */ var ProductWrapperSeven = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductGridItemTwo: __webpack_require__(58).default,QuickView: __webpack_require__(57).default})


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_5caef70e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_5caef70e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_5caef70e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_5caef70e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_5caef70e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=template&id=5caef70e&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('modal',{attrs:{"name":"quickview","width":"50%","scrollable":true,"height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',{staticClass:"quickview-wrapper row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-slider"},[_c('div',{staticClass:"product-details-img"},[_c('div',{staticClass:"product-badges"},[_vm.product.isSpecial?_c('span',{staticClass:"product-label purple"},[_vm._v("Special")]):_vm._e(),_vm._v(" "),_vm.product.isNew?_c('span',{staticClass:"product-label pink"},[_vm._v("New")]):_vm._e()]),_vm._v(" "),_c('swiper',{attrs:{"options":_vm.swiperOptionTop}},[_vm._l(_vm.product.image,function(image,index){return _c('div',{key:index,staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.name}})]);}),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-content"},[_c('div',{attrs:{"slot":"top-right"},slot:"top-right"},[_c('button',{staticClass:"modal-close",on:{"click":function($event){return _vm.$modal.hide('quickview');}}},[_c('i',{staticClass:"fa fa-times"})])]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.product.name))]),_vm._v(" "),_c('div',{staticClass:"product-details-price"},[_c('span',[_vm._v(_vm._s(_vm.product.price)+"₮")])]),_vm._v(" "),_c('div',{staticClass:"product-details-price text-sm"},[_c('span',{staticStyle:{"color":"rgb(36, 147, 180) !important"}},[_vm._v("Price : "+_vm._s(_vm.product.usdPrice)+"$")])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.product.description))]),_vm._v(" "),_c('div',{staticClass:"pro-details-quality"},[_c('div',{staticClass:"cart-plus-minus"},[_c('button',{staticClass:"dec qtybutton",on:{"click":function($event){return _vm.decreaseQuantity();}}},[_vm._v("-")]),_vm._v(" "),_c('input',{staticClass:"cart-plus-minus-box",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.singleQuantity}}),_vm._v(" "),_c('button',{staticClass:"inc qtybutton",on:{"click":function($event){return _vm.increaseQuantity();}}},[_vm._v("+")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-cart btn-hover"},[_c('button',{on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_vm._v("Сагс руу нэмэх")])])]),_vm._v(" "),_c('div',{staticClass:"pro-details-social"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.facebook.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-facebook"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://dribbble.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-dribbble"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.pinterest.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-pinterest-p"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-twitter"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.linkedin.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-linkedin"})])])])])])])])])],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=template&id=5caef70e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=script&lang=js&
/* harmony default export */ var QuickViewvue_type_script_lang_js_ = ({data(){return{item:'',singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}};},computed:{product(){console.log("quick view");return this.item;}},methods:{beforeOpen({params:product}){this.item=product;},addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){// if(this.product.quantity > this.singleQuantity)
this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);}}});
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuickViewvue_type_script_lang_js_ = (QuickViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/QuickView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuickViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f44fb9ae"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=template&id=bffb06f8&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-wrap-2 mb-25"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.name)}`}},[_c('img',{staticClass:"default-img",attrs:{"src":_vm.product.img,"alt":_vm.product.name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":_vm.product.img,"alt":_vm.product.name}})]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.isSpecial?"<span class=\"product-label green\">Special</span>":"<!---->")+" "+(_vm.product.isNew?"<span class=\"product-label pink\">New</span>":"<!---->")+"</div> <div class=\"product-action-2\"><button title=\"Add To Cart\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button> <button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content-2\">","</div>",[_vm._ssrNode("<div class=\"title-price-wrap-2\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.name)}`}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"price-2\"></div>")],2)])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=template&id=bffb06f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemTwovue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},onClick(product){this.$modal.show('quickview',product);},slugify(text){return text.toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemTwovue_type_script_lang_js_ = (ProductGridItemTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8985576c"
  
)

/* harmony default export */ var ProductGridItemTwo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-wrapper-seven.js.map