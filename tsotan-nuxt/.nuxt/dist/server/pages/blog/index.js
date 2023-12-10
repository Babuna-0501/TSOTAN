exports.ids = [66,15,25,51];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=4edeb2dc&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"blog-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"blog standard"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-area pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row flex-row-reverse\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"ml-20\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.getItems,function(blog,index){return _vm._ssrNode("<div class=\"col-md-6 col-12\">","</div>",[_c('BlogItemStyleTwo',{attrs:{"blog":blog}})],1);}),0)]),_vm._ssrNode(" "),_vm.getPaginateCount>1?_vm._ssrNode("<div>","</div>",[_c('pagination',{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":_vm.perPage,"records":_vm.blogData.length,"page-count":_vm.getPaginateCount},on:{"paginate":_vm.paginateClickCallback},model:{value:_vm.currentPage,callback:function($$v){_vm.currentPage=$$v;},expression:"currentPage"}})],1):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3\">","</div>",[_c('BlogSidebar')],1)],2)])]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=4edeb2dc&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var blogvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)),BlogItemStyleTwo:()=>__webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 144)),BlogSidebar:()=>__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 145)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54))},data(){return{blogData: blog,currentPage:1,perPage:6};},computed:{getItems(){let start=(this.currentPage-1)*this.perPage;let end=this.currentPage*this.perPage;return this.blogData.slice(start,end);},getPaginateCount(){return Math.ceil(this.blogData.length/this.perPage);}},methods:{paginateClickCallback(page){this.currentPage=Number(page);}},head(){return{title:"Blog Standard"};}});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "80160be6"
  
)

/* harmony default export */ var pages_blog = __webpack_exports__["default"] = (component.exports);

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

/***/ 60:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"A guide to latest trends product\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"videoSource \":\"/img/blog/blog-3.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 April, 2021\",\"comment\":12},{\"id\":2,\"title\":\"Five ways to lead a happy life\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"videoSource\":\"/img/tsotan/video/ts2.mp4\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"22 March, 2021\",\"comment\":45},{\"id\":3,\"title\":\"Tips on having a happy life forever\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-3.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"10 May, 2021\",\"comment\":30},{\"id\":4,\"title\":\"New winter collection with discount\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-4.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 June, 2021\",\"comment\":52},{\"id\":5,\"title\":\"New collection for this winter\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-5.jpg\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"10 July, 2021\",\"comment\":35},{\"id\":6,\"title\":\"Our best collection this winter\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-6.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"18 January, 2021\",\"comment\":40},{\"id\":7,\"title\":\"Tempor incididunt labo dolor magna\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-7.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 April, 2021\",\"comment\":12},{\"id\":8,\"title\":\"Lorem ipsum dolor sit amet consectetur\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-8.jpg\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"22 March, 2021\",\"comment\":45},{\"id\":9,\"title\":\"Reprehendrit in voluptate velit cillum\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-9.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"10 May, 2021\",\"comment\":30}]");

/***/ })

};;
//# sourceMappingURL=index.js.map