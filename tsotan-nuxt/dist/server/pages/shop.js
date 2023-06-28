exports.ids = [69,13,21,31,44,45,46];
exports.modules = {

/***/ 50:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=a46ec292&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\">","</header>",[_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"header-top-inner\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.jpg","alt":"tsotan logo"}})])],1)]),_vm._ssrNode(" <div class=\"language-currency-wrap\"><div class=\"same-language-currency\"><p>Call: <a href=\"callto:3965410\" style=\"color: #000;\">+976-9330 0991</a></p></div></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" style=\"background-color: #60445D;\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=a46ec292&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))},props:['containerClass'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a438f110"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(20).default,MiniCart: __webpack_require__(18).default,OffCanvasMobileMenu: __webpack_require__(19).default})


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=882e60a4&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a","color":"#fff"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\" style=\"justify-content: space-around;\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.jpg","alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2023 <a href=\"#\" target=\"_blank\">Tsotan</a>.<br> All Rights Reserved</p>")],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-50\"><div class=\"footer-title\"></div> <div class=\"footer-list\"><ul></ul></div></div></div> <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>Follow us</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/tsotantextile\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://twitter.com/@Tsotan_textile\" target=\"_blank\">Twitter</a></li> <li><a href=\"https://www.instagram.com/tsotan_mongolia/\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.youtube.com/\" target=\"_blank\">Youtube</a></li></ul></div></div></div> <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-30\"><div class=\"footer-title\"><h3>Хаяг</h3></div> <div class=\"footer-list\"><ul>\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        </ul></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=882e60a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8886de16"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=930afe44&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-content text-center\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</li>")],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=930afe44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({props:["pageTitle"]});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "341ac76c"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop.vue?vue&type=template&id=44fb5558&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"shop-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"дэлгүүр"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-area pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row flex-row-reverse\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"shop-top-bar\">","</div>",[_vm._ssrNode("<div class=\"select-showing-wrap\">","</div>",[_vm._ssrNode("<div class=\"shop-select\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.selectedPrice,expression:"selectedPrice"}],on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selectedPrice=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c('option',{attrs:{"value":"default"}},[_vm._v("Үнээр эрэмблэх")]),_vm._v(" "),_c('option',{attrs:{"value":"low2high"}},[_vm._v("Үнэ - Багаас их рүү")]),_vm._v(" "),_c('option',{attrs:{"value":"high2low"}},[_vm._v("Үнэ - Ихээс бага руу")])])]),_vm._ssrNode(" <p>"+_vm._ssrEscape("Showing "+_vm._s(_vm.perPage*_vm.currentPage-_vm.perPage+1)+" to\n                "+_vm._s(_vm.perPage*_vm.currentPage>_vm.filterItems.length?_vm.filterItems.length:_vm.perPage*_vm.currentPage)+" of\n                "+_vm._s(_vm.filterItems.length)+" result")+"</p>")],2),_vm._ssrNode(" <div class=\"shop-tab\"><button"+_vm._ssrClass(null,{active:_vm.layout==='twoColumn'})+"><i class=\"fa fa-th-large\"></i></button> <button"+_vm._ssrClass(null,{active:_vm.layout==='threeColumn'})+"><i class=\"fa fa-th\"></i></button> <button"+_vm._ssrClass(null,{active:_vm.layout==='list'})+"><i class=\"fa fa-list-ul\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-bottom-area mt-35\">","</div>",[_c('n-link',{attrs:{"to":"/product/product-detail"}},[_c('div',{staticClass:"row product-layout",class:{'list':_vm.layout==='list','grid three-column':_vm.layout==='threeColumn','grid two-column':_vm.layout==='twoColumn'}},_vm._l(_vm.getItems,function(product,index){return _c('div',{key:index,staticClass:"col-xl-4 col-sm-6"},[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1);}),0)])],1),_vm._ssrNode(" "),_vm.getPaginateCount>1?_vm._ssrNode("<div>","</div>",[_c('pagination',{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":_vm.perPage,"records":_vm.filterItems.length,"page-count":_vm.getPaginateCount},on:{"paginate":_vm.paginateClickCallback},model:{value:_vm.currentPage,callback:function($$v){_vm.currentPage=$$v;},expression:"currentPage"}})],1):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3\">","</div>",[_c('ShopSidebar',{attrs:{"classes":"mr-30"}})],1)],2)])]),_vm._ssrNode(" "),_c('QuickView'),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/shop.vue?vue&type=template&id=44fb5558&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/ShopSidebar.vue + 5 modules
var ShopSidebar = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop.vue?vue&type=script&lang=js&
/* harmony default export */ var shopvue_type_script_lang_js_ = ({components:{ShopSidebar: ShopSidebar["default"],HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 51)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55)),ProductGridItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 52))},data(){return{layout:"threeColumn",filterItems:[],prevSelectedParentName:'',prevSelectedChildName:'',prevSelectedCategoryName:'',currentPage:1,perPage:9,selectedPrice:'default'};},computed:{products(){return this.$store.getters.getProducts;},getItems(){let start=(this.currentPage-1)*this.perPage;let end=this.currentPage*this.perPage;return this.filterItems.slice(start,end);},getPaginateCount(){return Math.ceil(this.filterItems.length/this.perPage);}},mounted(){this.fetchData();this.updateProductData();},methods:{...Object(external_vuex_["mapActions"])(['fetchProducts']),...Object(external_vuex_["mapActions"])(['fetchCategories']),async fetchData(){await this.fetchProducts();await this.fetchCategories();},paginateClickCallback(page){this.currentPage=Number(page);},updateProductData(){this.paginateClickCallback(1);const parent=this.$route.query.parent;const child=this.$route.query.child;const category=this.$route.query.category;// const sizeName = this.$route.query.size;
// const colorName = this.$route.query.color;
// const tagName = this.$route.query.tag;
if(Object.keys(this.$route.query).length===0){this.filterItems=[...this.products];}if(!parent){this.filterItems=[...this.products];}if(parent&&this.prevSelectedParentName!==parent){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent));this.filterItems=[];this.filterItems.push(...resultData);}if(child&&this.prevSelectedChildName!==child){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent)&&this.slugify(item.childCategory).includes(child));this.filterItems=[];this.filterItems.push(...resultData);}if(category&&this.prevSelectedCategoryName!==category){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent)&&this.slugify(item.childCategory).includes(child)&&this.slugify(item.category).includes(category));this.filterItems=[];this.filterItems.push(...resultData);}this.prevSelectedParentName=parent;this.prevSelectedChildName=child;this.prevSelectedCategoryName=category;},slugify(text){return String(text)// .toString()
.toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"").replace(/,+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}},watch:{$route(){this.updateProductData();},selectedPrice(){switch(this.selectedPrice){case"low2high":this.filterItems=this.filterItems.sort((a,b)=>a.price-b.price);break;case"high2low":this.filterItems=this.filterItems.sort((a,b)=>b.price-a.price);break;default:this.filterItems=[...this.products];}}},head(){return{title:"Shop grid standard"};}});
// CONCATENATED MODULE: ./pages/shop.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_shopvue_type_script_lang_js_ = (shopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/shop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_shopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "86263486"
  
)

/* harmony default export */ var shop = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(51).default,Breadcrumb: __webpack_require__(55).default,ProductGridItem: __webpack_require__(59).default,ShopSidebar: __webpack_require__(60).default,QuickView: __webpack_require__(54).default,TheFooter: __webpack_require__(52).default})


/***/ })

};;
//# sourceMappingURL=shop.js.map