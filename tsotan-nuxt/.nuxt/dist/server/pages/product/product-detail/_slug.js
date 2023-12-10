exports.ids = [73,15,25,51];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/product-detail/_slug.vue?vue&type=template&id=1d83563a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-details-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Барааны дэлгэрэнгүй"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-area pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-slider\">","</div>",[this.product.image?_vm._ssrNode("<div class=\"product-details-img\">","</div>",[_vm._ssrNode("<div class=\"product-badges\">"+(_vm.product.isNew?"<span class=\"product-label pink\">New</span>":"<!---->")+"</div> "),_c('swiper',{ref:"swiperTop",attrs:{"options":_vm.swiperOptionTop}},[_vm._l(_vm.product.image,function(image,index){return _c('div',{key:index,staticClass:"large-img swiper-slide imageContainer"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.name}})]);}),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2),_vm._ssrNode(" "),_c('swiper',{ref:"swiperThumbs",staticClass:"mt-2",attrs:{"options":_vm.swiperOptionThumbs}},_vm._l(_vm.product.image,function(image,index){return _c('div',{key:index,staticClass:"thumb-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.title}})]);}),0)],2):_vm._e()])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-content ml-70\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <div class=\"product-details-price text-sm mt-3\"><span style=\"margin-top: 10px;\">"+_vm._ssrEscape("Үнэ : "+_vm._s(_vm.product.price)+"₮")+"</span></div> <div class=\"product-details-price text-sm\"><span style=\"color: rgb(36, 147, 180) !important;\">"+_vm._ssrEscape("Price : "+_vm._s(_vm.product.usdPrice)+"$")+"</span></div> <p style=\"font-size: 16px;\">"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p> <div class=\"pro-details-quality\"><div class=\"cart-plus-minus\"><button class=\"dec qtybutton\">-</button> <input type=\"text\" readonly=\"readonly\""+_vm._ssrAttr("value",_vm.singleQuantity)+" class=\"cart-plus-minus-box\"> <button class=\"inc qtybutton\">+</button></div> <div class=\"pro-details-cart btn-hover\"><button>Сагсанд нэмэх</button></div></div> "),_vm._ssrNode("<div class=\"pro-details-cart mt-20 mb-20\">","</div>",[_c('n-link',{attrs:{"to":"/cart"}},[_c('a',{staticClass:"empty-cart__button"},[_vm._v("Худалдан авах")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">Ангилал:</span> "),_vm._ssrNode("<ul>","</ul>",[_vm.product.category?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?parent=${_vm.slugify(String(_vm.product.parentCategory))}&child=${_vm.slugify(String(_vm.product.childCategory))}&category=${_vm.slugify(String(_vm.product.category))}`}},[_vm._v(_vm._s(_vm.product.category))])],1):_vm._e(),_vm._ssrNode(" "),_vm.product.childCategory?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?parent=${_vm.slugify(String(_vm.product.parentCategory))}&child=${_vm.slugify(String(_vm.product.childCategory))}`}},[_vm._v(_vm._s(_vm.product.childCategory))])],1):_vm._e(),_vm._ssrNode(" "),_vm.product.parentCategory?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?parent=${_vm.slugify(String(_vm.product.parentCategory))}`}},[_vm._v(_vm._s(_vm.product.parentCategory))])],1):_vm._e()],2)],2),_vm._ssrNode(" <div class=\"description-review-area pb-90 mt-30\"><div class=\"container\"><div class=\"description-review-wrapper\"><div class=\"tab-content description-review-bottom\"><div id=\"des-details1\"><div class=\"product-anotherinfo-wrapper\"><ul><li><span>Хэмжээ:</span>"+_vm._ssrEscape(" "+_vm._s(_vm.product.size))+"</li> <li><span>Материал:</span>"+_vm._ssrEscape(_vm._s(_vm.product.material))+"</li> <li><span>Угаах заавар:</span>"+_vm._ssrEscape(" "+_vm._s(_vm.product.instruction))+"</li> <li><span>Дэлгэрэнгүй:</span>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</li></ul></div></div></div></div> <div class=\"pro-details-social\"><ul><li><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li> <li><a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fa fa-dribbble\"></i></a></li> <li><a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fa fa-pinterest-p\"></i></a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"https://www.linkedin.com/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div></div></div>")],2)])],2)])]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/product/product-detail/_slug.vue?vue&type=template&id=1d83563a&

// EXTERNAL MODULE: ../api/product.js
var product = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/product-detail/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({data(){return{id:0,product:{image:[],name:null,// id: 0,
price:0,description:null,instruction:null,size:null,material:null,usdPrice:0,categoryId:0,parentCategory:null,childCategory:null,category:null,isSpecial:false,isNew:false},singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},swiperOptionThumbs:{// loop: true,
spaceBetween:10,freeMode:true,watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:true,touchRatio:0.2,slidesPerView:4,loopedSlides:4// looped slides should be the same
}};},mounted(){this.$nextTick(()=>{const swiperTop=this.$refs.swiperTop.$swiper;const swiperThumbs=this.$refs.swiperThumbs.$swiper;swiperTop.controller.control=swiperThumbs;swiperThumbs.controller.control=swiperTop;});this.id=this.$route.params.slug;this.fetchData();},methods:{slugify(text){const a=text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"")// Trim - from end of text
.replace(/,+/,"");// console.log('a : ' + a);
return a;},async fetchData(){try{const res=await product["a" /* default */].detail(this.id);const data=res.data;console.log("Response: ",data);this.product=data;this.product.id=data.id;this.product.image=data.image;this.product.name=data.name;// this.product.id = data.id;
this.product.price=data.price;this.product.description=data.description;this.product.instruction=data.instruction;this.product.size=data.size;this.product.material=data.material;this.product.isSpecial=data.isSpecial;this.product.categoryId=data.categoryId;this.product.parentCategory=data.parentCategory;this.product.childCategory=data.childCategory;this.product.category=data.category;this.product.isNew=data.isNew;console.log("image",data);}catch(error){console.log(error);}},addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Бараа аль хэдийн нэмэгдсэн'});}else{this.$notify({title:'Бараа картанд нэмэгдлээ!'});}this.$store.dispatch('addToCartItem',prod);},// TODO : zasah
increaseQuantity(){this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},onSlideChange(){// Synchronize the thumbs gallery with the main swiper
this.$refs.thumbsSwiper.swiper.slideTo(this.$refs.swiper.swiper.realIndex);}},head(){return{title:"Product Detail"};}});
// CONCATENATED MODULE: ./pages/product/product-detail/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_detail_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/product/product-detail/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_detail_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "649304df"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(53).default,Breadcrumb: __webpack_require__(56).default,TheFooter: __webpack_require__(54).default})


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

/***/ 76:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_1d83563a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_1d83563a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_1d83563a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_1d83563a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_1d83563a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=_slug.js.map