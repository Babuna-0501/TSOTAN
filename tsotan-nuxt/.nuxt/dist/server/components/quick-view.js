exports.ids = [49];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=quick-view.js.map