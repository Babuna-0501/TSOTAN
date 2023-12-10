exports.ids = [69,15,25,39,51,76];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirmation.vue?vue&type=template&id=527f573b&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"cart-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Баталгаажуулах"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"checkout-area pt-95 pb-100\" data-v-527f573b>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-527f573b>","</div>",[_vm._ssrNode("<h1 data-v-527f573b>Захиалга баталгаажуулах</h1> "),_c('product-payment-timer'),_vm._ssrNode(" <div class=\"row mt-4\" data-v-527f573b><div class=\"confirmWrapper\" data-v-527f573b>"+(_vm.formData.fb?"<p data-v-527f573b><strong data-v-527f573b>Facebook Name:</strong>"+_vm._ssrEscape(" "+_vm._s(_vm.formData.fb)+"\n          ")+"</p>":"<!---->")+" "+(_vm.formData.email?"<p data-v-527f573b><strong data-v-527f573b>Email:</strong>"+_vm._ssrEscape(" "+_vm._s(_vm.formData.email)+"\n          ")+"</p>":"<!---->")+" "+(_vm.formData.phoneNumber?"<p data-v-527f573b><strong data-v-527f573b>Утас:</strong>"+_vm._ssrEscape(" "+_vm._s(_vm.formData.phoneNumber)+"\n          ")+"</p>":"<!---->")+" "+(_vm.formData.address?"<p data-v-527f573b><strong data-v-527f573b>Хаяг:</strong>"+_vm._ssrEscape("\n            "+_vm._s(_vm.formData.address)+"\n          ")+"</p>":"<!---->")+" "+(_vm.formData.comment?"<p data-v-527f573b><strong data-v-527f573b>Хүргэлтийн нөхцөл:</strong>"+_vm._ssrEscape("\n            "+_vm._s(_vm.formData.comment)+"\n          ")+"</p>":"<!---->")+"</div> <div class=\"col-lg-5\" data-v-527f573b><div class=\"your-order-area\" data-v-527f573b><div class=\"your-order-wrap gray-bg-4\" data-v-527f573b><div class=\"your-order-product-info\" data-v-527f573b><div class=\"your-order-top\" data-v-527f573b><ul data-v-527f573b><li data-v-527f573b>Бараа</li> <li data-v-527f573b>Нийт үнэ</li></ul></div> <div class=\"your-order-middle\" data-v-527f573b><ul data-v-527f573b>"+_vm._ssrList(_vm.products,function(product,index){return"<li data-v-527f573b><span class=\"order-middle-left\" data-v-527f573b>"+_vm._ssrEscape(_vm._s(product.name)+" X "+_vm._s(product.cartQuantity))+"</span> <span class=\"order-price\" data-v-527f573b>"+_vm._ssrEscape("$"+_vm._s(product.total.toFixed(2)))+"</span></li>";})+"</ul></div> <div class=\"your-order-bottom\" data-v-527f573b><ul data-v-527f573b><li class=\"your-order-shipping\" data-v-527f573b>Хүргэлт</li> <li data-v-527f573b>+5000</li></ul></div> <div class=\"your-order-total\" data-v-527f573b><ul data-v-527f573b><li class=\"order-total\" data-v-527f573b>Нийт</li> <li data-v-527f573b>"+_vm._ssrEscape("$"+_vm._s(_vm.total.toFixed(2)))+"</li></ul></div></div></div></div></div></div> <div class=\"qpay row mt-4\" data-v-527f573b><div class=\"confirmWrapper\" data-v-527f573b>"+(_vm.invoice?"<img"+_vm._ssrAttr("src",'data:image/png;base64,'+_vm.invoice.qpayUrl)+_vm._ssrAttr("alt",_vm.invoice.qpayText)+" class=\"default-img\" data-v-527f573b>":"<!---->")+"</div></div>")],2)]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/confirmation.vue?vue&type=template&id=527f573b&scoped=true&

// EXTERNAL MODULE: ../api/product.js
var product = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirmation.vue?vue&type=script&lang=js&
/* harmony default export */ var confirmationvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)),ProductPaymentTimer:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 67))},data(){return{invoice:null,formData:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderedProducts:"",price:""}};},methods:{async createInvoice(){try{const res=await product["a" /* default */].createInvoice(this.formData);if(res.status>=200&&res.status<300){this.invoice=res.data;}else{console.error('Failed to create invoice',res.status,res.statusText);}}catch(error){console.error('An error occurred while creating the invoice:',error);}}},mounted(){this.formData=this.$route.params.formData;this.createInvoice();},computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},head(){return{title:"Confirmation"};}});
// CONCATENATED MODULE: ./pages/confirmation.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_confirmationvue_type_script_lang_js_ = (confirmationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/confirmation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_confirmationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "527f573b",
  "0f695c6a"
  
)

/* harmony default export */ var confirmation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(53).default,Breadcrumb: __webpack_require__(56).default,ProductPaymentTimer: __webpack_require__(67).default,TheFooter: __webpack_require__(54).default})


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b060b72.jpg";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=850b8ef6&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\">","</header>",[_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"header-top-inner\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(51),"alt":"tsotan logo"}})])],1)]),_vm._ssrNode(" <div class=\"language-currency-wrap\"><div class=\"same-language-currency\"><p>Call: <a href=\"callto:3965410\" style=\"color: #000;\">+976-9330 0991</a></p></div></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" style=\"background-color: #60445D;\">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=850b8ef6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))},props:['containerClass'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "618c116c"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(21).default,MiniCart: __webpack_require__(19).default,OffCanvasMobileMenu: __webpack_require__(20).default})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=0ab8748a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a","color":"#fff"},attrs:{"id":"social"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\" style=\"justify-content: space-around;\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(51),"alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2023 <a href=\"#\" target=\"_blank\">Tsotan</a>.<br> All Rights Reserved</p>")],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-50\"><div class=\"footer-title\"></div> <div class=\"footer-list\"><ul></ul></div></div></div> <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>Follow us</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/tsotantextile\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://twitter.com/@Tsotan_textile\" target=\"_blank\">Twitter</a></li> <li><a href=\"https://www.instagram.com/tsotan_mongolia/\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.youtube.com/\" target=\"_blank\">Youtube</a></li></ul></div></div></div> <div class=\"col-lg-2 col-sm-4\"><div class=\"footer-widget mb-30 ml-30\"><div class=\"footer-title\"><h3>Хаяг</h3></div> <div class=\"footer-list\"><ul>\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        </ul></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=0ab8748a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "adb72d3a"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b4f45cc8"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPaymentTimer_vue_vue_type_style_index_0_id_48b0ad44_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPaymentTimer_vue_vue_type_style_index_0_id_48b0ad44_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPaymentTimer_vue_vue_type_style_index_0_id_48b0ad44_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPaymentTimer_vue_vue_type_style_index_0_id_48b0ad44_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPaymentTimer_vue_vue_type_style_index_0_id_48b0ad44_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductPaymentTimer.vue?vue&type=template&id=48b0ad44&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"timer"},[_vm._ssrNode("<p>Захиалга цуцлагдах хугацаа:</p> <p>Та захиалгаа тухайн хугацаанд багтаан хийнэ үү</p> <div>"+_vm._ssrEscape(_vm._s(_vm.formattedTime))+"</div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ProductPaymentTimer.vue?vue&type=template&id=48b0ad44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductPaymentTimer.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductPaymentTimervue_type_script_lang_js_ = ({data(){return{duration:600,timer:null};},computed:{formattedTime(){const minutes=Math.floor(this.duration/60);const seconds=this.duration%60;return`${minutes} мин ${seconds} сек`;}},methods:{startTimer(){this.timer=setInterval(()=>{if(this.duration>0){this.duration--;}else{clearInterval(this.timer);}},1000);}},mounted(){this.startTimer();},beforeDestroy(){clearInterval(this.timer);}//   TODO : 10 minut duusahad confirmation huudasnii this.invoice=null bolgoh
});
// CONCATENATED MODULE: ./components/ProductPaymentTimer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductPaymentTimervue_type_script_lang_js_ = (ProductPaymentTimervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ProductPaymentTimer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductPaymentTimervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fbe7e0b6"
  
)

/* harmony default export */ var ProductPaymentTimer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmation_vue_vue_type_style_index_0_id_527f573b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmation_vue_vue_type_style_index_0_id_527f573b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmation_vue_vue_type_style_index_0_id_527f573b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmation_vue_vue_type_style_index_0_id_527f573b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmation_vue_vue_type_style_index_0_id_527f573b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=confirmation.js.map