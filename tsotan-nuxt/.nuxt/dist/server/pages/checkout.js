exports.ids = [68,15,21,25,51];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=43d9e48e&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"cart-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Төлбөр төлөх"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"checkout-area pt-95 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h3 class=\"mb-5\">Таны захиалга</h3> "),_vm.products.length>0?_vm._ssrNode("<div class=\"row\">","</div>",[_c('FormPage',{on:{"formSubmitted":_vm.handleFormSubmitted}}),_vm._ssrNode(" <div class=\"col-lg-5 mt-4\"><div class=\"your-order-area\"><div class=\"your-order-wrap gray-bg-4\"><div class=\"your-order-product-info\"><div class=\"your-order-top\"><ul><li>Бараа</li> <li>Нийт үнэ</li></ul></div> <div class=\"your-order-middle\"><ul>"+_vm._ssrList(_vm.products,function(product,index){return"<li><span class=\"order-middle-left\">"+_vm._ssrEscape(_vm._s(product.name)+" X "+_vm._s(product.cartQuantity))+"</span> <span class=\"order-price\">"+_vm._ssrEscape(_vm._s(product.total.toFixed(2))+"₮")+"</span></li>";})+"</ul></div> <div class=\"your-order-total\"><ul><li class=\"order-total\">Нийт</li> <li>"+_vm._ssrEscape(_vm._s(_vm.total.toFixed(2))+"₮")+"</li></ul></div></div></div></div></div>")],2):_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"empty-cart text-center\">","</div>",[_vm._ssrNode("<div class=\"icon\"><i class=\"pe-7s-cash\"></i></div> <h4>Таны сагсанд бараа байхгүй байна</h4> "),_c('n-link',{staticClass:"empty-cart__button",attrs:{"to":"/shop"}},[_vm._v("Дэлгүүр")])],2)])])],2)]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=43d9e48e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js&
/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)),FormPage:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80)),Confirm:()=>__webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, 101))},computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},data(){return{formData:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderId:""}};},methods:{handleFormSubmitted(formData){this.$router.push({name:"confirmation",params:{formData}});}},head(){return{title:"Checkout"};}});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ac3c37b"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(53).default,Breadcrumb: __webpack_require__(56).default,FormPage: __webpack_require__(80).default,TheFooter: __webpack_require__(54).default})


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

/***/ 63:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPage_vue_vue_type_style_index_0_id_43180fae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPage_vue_vue_type_style_index_0_id_43180fae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPage_vue_vue_type_style_index_0_id_43180fae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPage_vue_vue_type_style_index_0_id_43180fae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPage_vue_vue_type_style_index_0_id_43180fae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormPage.vue?vue&type=template&id=43180fae&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"formpage"},[_vm._ssrNode("<form data-v-43180fae><div class=\"mb-3\" data-v-43180fae><label for=\"fb\" class=\"form-label\" data-v-43180fae>Facebook Name</label> <input type=\"text\" id=\"fb\" required=\"required\""+_vm._ssrAttr("value",_vm.formData.fb)+" class=\"form-control\" data-v-43180fae> <span class=\"text-danger\""+_vm._ssrStyle(null,null,{display:_vm.validationErrors.fb?'':'none'})+" data-v-43180fae>"+_vm._ssrEscape(_vm._s(_vm.validationErrors.fb))+"</span></div> <div class=\"mb-3\" data-v-43180fae><label for=\"email\" class=\"form-label\" data-v-43180fae>Email</label> <input type=\"email\" id=\"email\" required=\"required\""+_vm._ssrAttr("value",_vm.formData.email)+" class=\"form-control\" data-v-43180fae> <span class=\"text-danger\""+_vm._ssrStyle(null,null,{display:_vm.validationErrors.email?'':'none'})+" data-v-43180fae>"+_vm._ssrEscape(_vm._s(_vm.validationErrors.email))+"</span></div> <div class=\"mb-3\" data-v-43180fae><label for=\"phoneNumber\" class=\"form-label\" data-v-43180fae>Утас</label> <input type=\"text\" id=\"phoneNumber\" required=\"required\""+_vm._ssrAttr("value",_vm.formData.phoneNumber)+" class=\"form-control\" data-v-43180fae> <span class=\"text-danger\""+_vm._ssrStyle(null,null,{display:_vm.validationErrors.phoneNumber?'':'none'})+" data-v-43180fae>"+_vm._ssrEscape(_vm._s(_vm.validationErrors.phoneNumber))+"</span></div> <div class=\"mb-3\" data-v-43180fae><label for=\"address\" class=\"form-label\" data-v-43180fae>Хаяг</label> <textarea id=\"address\" class=\"form-control\" data-v-43180fae>"+_vm._ssrEscape(_vm._s(_vm.formData.address))+"</textarea></div> <div class=\"mb-3\" data-v-43180fae><label for=\"comment\" class=\"form-label\" data-v-43180fae>Хүргэлтийн нөхцөл (Та бараа хүлээн авах өдөр, байршил, нөхцөл зэргийг\n        дэлгэрэнгүй тусгана уу)</label> <textarea id=\"comment\" class=\"form-control\" data-v-43180fae>"+_vm._ssrEscape(_vm._s(_vm.formData.comment))+"</textarea></div> <button type=\"submit\" class=\"btn border-0 formbtn btn-primary\" data-v-43180fae>\n      Баталгаажуулах\n    </button></form>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/FormPage.vue?vue&type=template&id=43180fae&scoped=true&

// EXTERNAL MODULE: ../api/product.js
var product = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormPage.vue?vue&type=script&lang=js&
/* harmony default export */ var FormPagevue_type_script_lang_js_ = ({data(){return{orderId:null,formData:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderedProducts:"",price:""},validationErrors:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderedProducts:"",price:""}};},methods:{async submitForm(){try{this.validateForm();if(Object.values(this.validationErrors).every(error=>!error)){this.formData.orderedProducts=this.products.map(product=>`${product.name}:${product.cartQuantity}`).toString();this.formData.price=this.total.toFixed(2);this.$emit("formSubmitted",{...this.formData});}else{console.log('Form validation failed. Please check the fields.');}}catch(error){console.log(error);}},async createOrder(){try{const jsonStrings=this.products.map(product=>`"${product.name}":"${product.cartQuantity}"`);const res=await product["a" /* default */].createOrder({...this.formData,orderedProducts:jsonStrings.toString(),price:this.total.toFixed(2)});this.orderId=res.data.id;}catch(error){console.log(error);}},validateForm(){this.validationErrors.fb=this.formData.fb.trim()===''?'FB нэрээ оруулна уу':'';this.validationErrors.email=this.formData.email.trim()===''?'email оруулна уу':'';this.validationErrors.phoneNumber=this.formData.phoneNumber.trim()===''?'Утасны дугаараа оруулна уу':'';}},computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}}});
// CONCATENATED MODULE: ./components/FormPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormPagevue_type_script_lang_js_ = (FormPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FormPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43180fae",
  "75d4774c"
  
)

/* harmony default export */ var FormPage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_43d9e48e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_43d9e48e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_43d9e48e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_43d9e48e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_43d9e48e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=checkout.js.map