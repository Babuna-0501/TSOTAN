exports.ids = [70,13,21,32,34,44,46];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b060b72.jpg";

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=850b8ef6&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\">","</header>",[_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"header-top-inner\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(50),"alt":"tsotan logo"}})])],1)]),_vm._ssrNode(" <div class=\"language-currency-wrap\"><div class=\"same-language-currency\"><p>Call: <a href=\"callto:3965410\" style=\"color: #000;\">+976-9330 0991</a></p></div></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" style=\"background-color: #60445D;\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=850b8ef6&

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
  "584623ee"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(20).default,MiniCart: __webpack_require__(18).default,OffCanvasMobileMenu: __webpack_require__(19).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=2ef2dea0&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a","color":"#fff"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\" style=\"justify-content: space-around;\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(50),"alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2023 <a href=\"#\" target=\"_blank\">Tsotan</a>.<br> All Rights Reserved</p>")],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-50\"><div class=\"footer-title\"></div> <div class=\"footer-list\"><ul></ul></div></div></div> <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>Follow us</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/tsotantextile\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://twitter.com/@Tsotan_textile\" target=\"_blank\">Twitter</a></li> <li><a href=\"https://www.instagram.com/tsotan_mongolia/\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.youtube.com/\" target=\"_blank\">Youtube</a></li></ul></div></div></div> <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-30\"><div class=\"footer-title\"><h3>Хаяг</h3></div> <div class=\"footer-list\"><ul>\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        </ul></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=2ef2dea0&

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
  "92fd2582"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_312d79a3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
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
  
  var style0 = __webpack_require__(54)
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
  "d995b1f6"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
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
  "43c94940"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=template&id=33690615&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-wrap-2 mb-25"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_c('img',{staticClass:"default-img",attrs:{"src":_vm.product.images[0],"alt":_vm.product.title}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":_vm.product.images[1],"alt":_vm.product.title}})]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new?"<span class=\"product-label pink\">New</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> <div class=\"product-action-2\"><button title=\"Compare\" class=\"btn\"><i class=\"pe-7s-shuffle\"></i></button> <button title=\"Add To Cart\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button> <button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content-2\">","</div>",[_vm._ssrNode("<div class=\"title-price-wrap-2\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v(_vm._s(_vm.product.title))])],1),_vm._ssrNode(" <div class=\"price-2\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price.toFixed(2)))+"</span>":"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"pro-wishlist-2\"><button><i class=\"pe-7s-like\"></i></button></div>")],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=template&id=33690615&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemTwovue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},onClick(product){this.$modal.show('quickview',product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemTwovue_type_script_lang_js_ = (ProductGridItemTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bcd1381"
  
)

/* harmony default export */ var ProductGridItemTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductNewWrapper.vue?vue&type=template&id=d882a62a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-area pt-90 pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title-5 mb-60 text-center\"><h2>New Products</h2></div> "),_vm._ssrNode("<div class=\"product-carousel product-carousel-nav-center position-relative\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l(_vm.products,function(product,index){return _c('swiper-slide',{key:index},[_c('ProductGridItemTwo',{attrs:{"product":product}}),_vm._v("\n                    dasdasdasdsadqwueywqueywqeuwyqqeuwqy\n                ")],1);}),1),_vm._ssrNode(" <div class=\"product-carousel-nav swiper-button-prev\"><i class=\"pe-7s-angle-left\"></i></div> <div class=\"product-carousel-nav swiper-button-next\"><i class=\"pe-7s-angle-right\"></i></div>")],2)],2),_vm._ssrNode(" "),_c('QuickView')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductNewWrapper.vue?vue&type=template&id=d882a62a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductNewWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductNewWrappervue_type_script_lang_js_ = ({components:{ProductGridItemTwo:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55))},data(){return{swiperOption:{loop:true,speed:750,spaceBetween:30,slidesPerView:4,autoplay:{delay:6000},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}}};},computed:{products(){return this.$store.getters.getNewProducts.filter(item=>item.category.includes("book"));}}});
// CONCATENATED MODULE: ./components/product/ProductNewWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductNewWrappervue_type_script_lang_js_ = (ProductNewWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductNewWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductNewWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dfb1a256"
  
)

/* harmony default export */ var ProductNewWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductGridItemTwo: __webpack_require__(57).default,QuickView: __webpack_require__(55).default})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop-new.vue?vue&type=template&id=65297c9a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"shop-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Шинэ бараа"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-area pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"shop-top-bar\">","</div>",[_vm._ssrNode("<div class=\"select-showing-wrap\">","</div>",[_vm._ssrNode("<div class=\"shop-select\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.selectedPrice,expression:"selectedPrice"}],on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selectedPrice=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c('option',{attrs:{"value":"default"}},[_vm._v("Үнээр эрэмблэх")]),_vm._v(" "),_c('option',{attrs:{"value":"low2high"}},[_vm._v("Үнэ - Багаас их рүү")]),_vm._v(" "),_c('option',{attrs:{"value":"high2low"}},[_vm._v("Үнэ - Ихээс бага руу")])])]),_vm._ssrNode(" <p>"+_vm._ssrEscape("Showing "+_vm._s(_vm.perPage*_vm.currentPage-_vm.perPage+1)+" to\n                "+_vm._s(_vm.perPage*_vm.currentPage>_vm.filterItems.length?_vm.filterItems.length:_vm.perPage*_vm.currentPage)+" of\n                "+_vm._s(_vm.filterItems.length)+" result")+"</p>")],2),_vm._ssrNode(" <div class=\"shop-tab\"><button"+_vm._ssrClass(null,{active:_vm.layout==='twoColumn'})+"><i class=\"fa fa-th-large\"></i></button> <button"+_vm._ssrClass(null,{active:_vm.layout==='threeColumn'})+"><i class=\"fa fa-th\"></i></button> <button"+_vm._ssrClass(null,{active:_vm.layout==='list'})+"><i class=\"fa fa-list-ul\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-bottom-area mt-35\">","</div>",[_c('n-link',{attrs:{"to":"/product/product-detail"}},[_c('div',{staticClass:"row product-layout",class:{'list':_vm.layout==='list','grid three-column':_vm.layout==='threeColumn','grid two-column':_vm.layout==='twoColumn'}},[_vm._v("\n                  tueryterutyreutyeruityeruiteryiu\n                "),_vm._l(_vm.getItems,function(product,index){return _c('div',{key:index,staticClass:"col-xl-4 col-sm-6"},[_c('ProductNewWrapper')],1);})],2)])],1),_vm._ssrNode(" "),_vm.getPaginateCount>1?_vm._ssrNode("<div>","</div>",[_c('pagination',{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":_vm.perPage,"records":_vm.filterItems.length,"page-count":_vm.getPaginateCount},on:{"paginate":_vm.paginateClickCallback},model:{value:_vm.currentPage,callback:function($$v){_vm.currentPage=$$v;},expression:"currentPage"}})],1):_vm._e()],2)])])]),_vm._ssrNode(" "),_c('QuickView'),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/shop-new.vue?vue&type=template&id=65297c9a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop-new.vue?vue&type=script&lang=js&
/* harmony default export */ var shop_newvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 52)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),ProductNewWrapper:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 66)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53))},data(){return{layout:"threeColumn",filterItems:[],prevSelectedParentName:'',prevSelectedChildName:'',prevSelectedCategoryName:'',currentPage:1,perPage:9,selectedPrice:'default'};},computed:{products(){return this.$store.getters.getProducts;},getItems(){let start=(this.currentPage-1)*this.perPage;let end=this.currentPage*this.perPage;return this.filterItems.slice(start,end);},getPaginateCount(){return Math.ceil(this.filterItems.length/this.perPage);}},mounted(){this.fetchData();this.updateProductData();},methods:{...Object(external_vuex_["mapActions"])(['fetchProducts']),...Object(external_vuex_["mapActions"])(['fetchCategories']),async fetchData(){await this.fetchProducts();await this.fetchCategories();},paginateClickCallback(page){this.currentPage=Number(page);},updateProductData(){this.paginateClickCallback(1);const parent=this.$route.query.parent;const child=this.$route.query.child;const category=this.$route.query.category;// const sizeName = this.$route.query.size;
// const colorName = this.$route.query.color;
// const tagName = this.$route.query.tag;
if(Object.keys(this.$route.query).length===0){this.filterItems=[...this.products];}if(!parent){this.filterItems=[...this.products];}if(parent&&this.prevSelectedParentName!==parent){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent));this.filterItems=[];this.filterItems.push(...resultData);}if(child&&this.prevSelectedChildName!==child){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent)&&this.slugify(item.childCategory).includes(child));this.filterItems=[];this.filterItems.push(...resultData);}if(category&&this.prevSelectedCategoryName!==category){const resultData=this.products.filter(item=>this.slugify(item.parentCategory).includes(parent)&&this.slugify(item.childCategory).includes(child)&&this.slugify(item.category).includes(category));this.filterItems=[];this.filterItems.push(...resultData);}this.prevSelectedParentName=parent;this.prevSelectedChildName=child;this.prevSelectedCategoryName=category;},slugify(text){return String(text)// .toString()
.toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"").replace(/,+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}},watch:{$route(){this.updateProductData();},selectedPrice(){switch(this.selectedPrice){case"low2high":this.filterItems=this.filterItems.sort((a,b)=>a.price-b.price);break;case"high2low":this.filterItems=this.filterItems.sort((a,b)=>b.price-a.price);break;default:this.filterItems=[...this.products];}}},head(){return{title:"Shop grid standard"};}});
// CONCATENATED MODULE: ./pages/shop-new.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_shop_newvue_type_script_lang_js_ = (shop_newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/shop-new.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_shop_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e24a260"
  
)

/* harmony default export */ var shop_new = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(52).default,Breadcrumb: __webpack_require__(56).default,ProductNewWrapper: __webpack_require__(66).default,QuickView: __webpack_require__(55).default,TheFooter: __webpack_require__(53).default})


/***/ })

};;
//# sourceMappingURL=shop-new.js.map