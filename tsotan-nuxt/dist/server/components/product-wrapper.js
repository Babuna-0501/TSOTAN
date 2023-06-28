exports.ids = [35,31,44];
exports.modules = {

/***/ 50:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=template&id=312d79a3&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('modal',{attrs:{"name":"quickview","width":"50%","scrollable":true,"height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',{staticClass:"quickview-wrapper row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-slider"},[_c('div',{staticClass:"product-details-img"},[_c('div',{staticClass:"product-badges"},[_vm.product.new?_c('span',{staticClass:"product-label pink"},[_vm._v("New")]):_vm._e(),_vm._v(" "),_vm.product.discount?_c('span',{staticClass:"product-label purple"},[_vm._v("-"+_vm._s(_vm.product.discount)+"%")]):_vm._e()]),_vm._v(" "),_c('swiper',{attrs:{"options":_vm.swiperOptionTop}},[_vm._l(_vm.product.images,function(image,index){return _c('div',{key:index,staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.title}})]);}),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-content"},[_c('div',{attrs:{"slot":"top-right"},slot:"top-right"},[_c('button',{staticClass:"modal-close",on:{"click":function($event){return _vm.$modal.hide('quickview');}}},[_c('i',{staticClass:"fa fa-times"})])]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.product.title))]),_vm._v(" "),_c('div',{staticClass:"product-details-price"},[_c('span',[_vm._v("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))]),_vm._v(" "),_vm.product.discount>0?_c('span',{staticClass:"old"},[_vm._v("$"+_vm._s(_vm.product.price.toFixed(2)))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"pro-details-rating-wrap"},[_vm.product.rating==5?_c('div',{staticClass:"pro-details-rating"},[_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"})]):_vm._e(),_vm._v(" "),_vm.product.rating==4?_c('div',{staticClass:"pro-details-rating"},[_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"})]):_vm._e(),_vm._v(" "),_vm.product.rating==3?_c('div',{staticClass:"pro-details-rating"},[_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"})]):_vm._e(),_vm._v(" "),_vm.product.rating==2?_c('div',{staticClass:"pro-details-rating"},[_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"})]):_vm._e(),_vm._v(" "),_vm.product.rating==1?_c('div',{staticClass:"pro-details-rating"},[_c('i',{staticClass:"fa fa-star-o yellow"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o"})]):_vm._e(),_vm._v(" "),_c('span',[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.product.rating)+" Reviews")])])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.product.description))]),_vm._v(" "),_vm.product.variation?_c('div',{staticClass:"pro-details-size-color"},[_c('div',{staticClass:"pro-details-color-wrap"},[_c('h6',{staticClass:"label"},[_vm._v("Color")]),_vm._v(" "),_c('div',{staticClass:"pro-details-color-content"},_vm._l(_vm.product.variation.color,function(item,index){return _c('label',{key:index,staticClass:"radio",class:item},[_c('input',{attrs:{"type":"radio","name":"colorGroup"}}),_vm._v(" "),_c('span',{staticClass:"check-mark"})]);}),0)]),_vm._v(" "),_c('div',{staticClass:"pro-details-size-wrap"},[_c('h6',{staticClass:"label"},[_vm._v("Size")]),_vm._v(" "),_c('div',{staticClass:"pro-details-size-content"},_vm._l(_vm.product.variation.sizes,function(item,index){return _c('label',{key:index,staticClass:"radio"},[_c('input',{attrs:{"type":"radio","name":"sizeGroup"}}),_vm._v(" "),_c('span',{staticClass:"check-mark"},[_vm._v(_vm._s(item))])]);}),0)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pro-details-quality"},[_c('div',{staticClass:"cart-plus-minus"},[_c('button',{staticClass:"dec qtybutton",on:{"click":function($event){return _vm.decreaseQuantity();}}},[_vm._v("-")]),_vm._v(" "),_c('input',{staticClass:"cart-plus-minus-box",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.singleQuantity}}),_vm._v(" "),_c('button',{staticClass:"inc qtybutton",on:{"click":function($event){return _vm.increaseQuantity();}}},[_vm._v("+")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-cart btn-hover"},[_c('button',{on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_vm._v("Add To Cart")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-wishlist"},[_c('button',{on:{"click":function($event){return _vm.addToWishlist(_vm.product);}}},[_c('i',{staticClass:"fa fa-heart-o"})])]),_vm._v(" "),_c('div',{staticClass:"pro-details-compare"},[_c('button',{on:{"click":function($event){return _vm.addToCompare(_vm.product);}}},[_c('i',{staticClass:"pe-7s-shuffle"})])])]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label"},[_vm._v("Categories:")]),_vm._v(" "),_c('ul',_vm._l(_vm.product.category,function(category,index){return _c('li',{key:index},[_c('n-link',{attrs:{"to":`/shop?category=${category}`}},[_vm._v(_vm._s(category)+",")])],1);}),0)]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label"},[_vm._v("Tag:")]),_vm._v(" "),_c('ul',_vm._l(_vm.product.tag,function(tag,index){return _c('li',{key:index},[_c('n-link',{attrs:{"to":`/shop?tag=${tag}`}},[_vm._v(_vm._s(tag)+",")])],1);}),0)]),_vm._v(" "),_c('div',{staticClass:"pro-details-social"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.facebook.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-facebook"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://dribbble.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-dribbble"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.pinterest.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-pinterest-p"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-twitter"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.linkedin.com/","target":"_blank"}},[_c('i',{staticClass:"fa fa-linkedin"})])])])])])])])])],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=template&id=312d79a3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=script&lang=js&
/* harmony default export */ var QuickViewvue_type_script_lang_js_ = ({data(){return{item:'',singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}};},computed:{product(){return this.item;}},methods:{beforeOpen({params:product}){this.item=product;},addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(this.product.quantity>this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);}}});
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuickViewvue_type_script_lang_js_ = (QuickViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/QuickView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
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
  "cf1f6a8a"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=8369c7d2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<ul><li><h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <p>"+_vm._ssrEscape("Үнэ: "+_vm._s(_vm.product.price)+" ₮")+"</p> <p><img"+_vm._ssrAttr("src",_vm.getImg(_vm.product.img1))+"></p> <p>"+_vm._ssrEscape("Дэлгэрэнгүй: "+_vm._s(_vm.product.description))+"</p> <p>"+_vm._ssrEscape("Категори: "+_vm._s(_vm.product.parentCategory))+"</p></li></ul>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=8369c7d2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({// created() {
//     axios.get('https://rest.tsotan.mn/product/list/${id}')
//         .then(response => {
//         this.productList = response.data;
//         })
//         .catch(error => {
//         console.error(error);
//     });
// },
//
// data() {
//     return {
//         productList: []
//     };
// },
props:["product","layout"],methods:{// getImgUrl() {
//   return this.product.imgUrl;
// },
addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},onClick(product){this.$modal.show('quickview',product);},getImg(imgUrl){return imgUrl;}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e997a38"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapper.vue?vue&type=template&id=5880e714&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-area pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.isSectionTitle?true:false)?_c('SectionTitleWithSubTitle',{attrs:{"title":"DAILY DEALS!","classes":"section-title"}}):_vm._e(),_vm._ssrNode(" <ul class=\"nav product-tab-list pt-30 pb-55 justify-content-center\"><li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#new-product\" role=\"tab\" class=\"nav-link\">New Arrivals</button></li> <li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#best-product\" role=\"tab\" class=\"nav-link active\">Best Sellers</button></li> <li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#sale-product\" role=\"tab\" class=\"nav-link\">Sale Items</button></li></ul> "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"new-product\" role=\"tabpanel\" class=\"tab-pane fade\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.newProducts.slice(0,8),function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"best-product\" role=\"tabpanel\" class=\"tab-pane fade show active\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.bestProducts.slice(0,8),function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"sale-product\" role=\"tabpanel\" class=\"tab-pane fade\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.saleProducts.slice(0,8),function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/shop"}},[_vm._v("VIEW MORE PRODUCTS")])],1)],2)],2),_vm._ssrNode(" "),_c('QuickView')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductWrapper.vue?vue&type=template&id=5880e714&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductWrappervue_type_script_lang_js_ = ({props:['isSectionTitle'],components:{ProductGridItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54))},computed:{newProducts(){return this.$store.getters.getNewProducts;},bestProducts(){return this.$store.getters.getBestProducts;},saleProducts(){return this.$store.getters.getSaleProducts;}},data(){return{layout:"twoColumn"};}});
// CONCATENATED MODULE: ./components/product/ProductWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWrappervue_type_script_lang_js_ = (ProductWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d76b1f8"
  
)

/* harmony default export */ var ProductWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductGridItem: __webpack_require__(59).default,QuickView: __webpack_require__(54).default})


/***/ })

};;
//# sourceMappingURL=product-wrapper.js.map