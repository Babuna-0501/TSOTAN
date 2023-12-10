exports.ids = [76,39];
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
//# sourceMappingURL=76.js.map