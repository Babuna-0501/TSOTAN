exports.ids = [39];
exports.modules = {

/***/ 59:
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

/***/ })

};;
//# sourceMappingURL=product-payment-timer.js.map