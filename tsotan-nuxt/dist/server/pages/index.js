exports.ids = [65,7,16,21,23,46];
exports.modules = {

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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderTsotan.vue?vue&type=template&id=ddd034ec&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"slider-area nav-style-1"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_c('swiper-slide',{staticClass:"single-slider single-slider-10 slider-height-8 bg-gray-2"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6 d-flex align-items-center"},[_c('div',{staticClass:"slider-content slider-content-10 slider-animation-1"},[_c('h3',[_vm._v("Tsotan")]),_vm._v(" "),_c('h1',[_vm._v("Mongolia"),_c('br'),_vm._v("Футболк")]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("Худалдан авах")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-singleimg-hm10 ml-40 mr-40 slider-img-animation"},[_c('img',{attrs:{"src":"/img/tsotan/futbolk/mongolia/mongolia02.jpg","alt":"image"}})])])])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"single-slider single-slider-10 slider-height-8 bg-gray-2"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6 d-flex align-items-center"},[_c('div',{staticClass:"slider-content slider-content-10 slider-animation-1"},[_c('h3',[_vm._v("Аравч")]),_vm._v(" "),_c('h1',[_vm._v("Таван нүдэн"),_c('br'),_vm._v(" аравч 2023")]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("Худалдан авах")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-singleimg-hm10 ml-40 mr-40 slider-img-animation"},[_c('img',{attrs:{"src":"/img/tsotan/aravch/Tavan nuden aravch.jpg","alt":"image"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],1)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/hero/HeroSliderTsotan.vue?vue&type=template&id=ddd034ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderTsotan.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroSliderTsotanvue_type_script_lang_js_ = ({data(){return{swiperOption:{loop:true,speed:750,slidesPerView:1,spaceBetween:10,autoplay:{delay:6000},effect:"fade",fadeEffect:{crossFade:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}};}});
// CONCATENATED MODULE: ./components/hero/HeroSliderTsotan.vue?vue&type=script&lang=js&
 /* harmony default export */ var hero_HeroSliderTsotanvue_type_script_lang_js_ = (HeroSliderTsotanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/hero/HeroSliderTsotan.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_HeroSliderTsotanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7230f3d2"
  
)

/* harmony default export */ var HeroSliderTsotan = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DealWithCountdownTwo.vue?vue&type=template&id=a149588e&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"deal-area pt-100 pb-100",style:{backgroundImage:'url(/img/bg/bg-1.jpg)'}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6 ms-auto\">","</div>",[_vm._ssrNode("<div class=\"funfact-content funfact-res text-center\">","</div>",[_vm._ssrNode("<h2>Дэлгүүрээр зочлох</h2> <ul class=\"timer\"><li><span id=\"days\"></span>\n                            Days\n                        </li> <li><span id=\"hours\"></span>\n                            Hours\n                        </li> <li><span id=\"minutes\"></span>\n                            Mins\n                        </li> <li><span id=\"seconds\"></span>\n                            Secs\n                        </li></ul> "),_vm._ssrNode("<div class=\"funfact-btn btn-only-round funfact-btn-red-2 btn-hover\">","</div>",[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("Зочлох")])],1)],2)])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/DealWithCountdownTwo.vue?vue&type=template&id=a149588e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DealWithCountdownTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var DealWithCountdownTwovue_type_script_lang_js_ = ({mounted(){let intervalId;if(intervalId){clearInterval(intervalId);}const sec=1000,min=sec*60,hour=min*60,day=hour*24;const end=new Date("Jun 30, 2022").getTime();const days=document.getElementById("days");const hours=document.getElementById("hours");const minutes=document.getElementById("minutes");const seconds=document.getElementById("seconds");intervalId=setInterval(()=>{const current=new Date().getTime();const remaining=end-current;const day2=Math.floor(remaining/day);const hour2=Math.floor(remaining%day/hour);const minute=Math.floor(remaining%hour/min);const second=Math.floor(remaining%min/sec);if(!days||!hours||!minutes||!seconds)return;days.innerText=day2>9?day2:`0${day2}`;hours.innerText=hour2>9?hour2:`0${hour2}`;minutes.innerText=minute>9?minute:`0${minute}`;seconds.innerText=second>9?second:`0${second}`;},1000);}});
// CONCATENATED MODULE: ./components/DealWithCountdownTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DealWithCountdownTwovue_type_script_lang_js_ = (DealWithCountdownTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DealWithCountdownTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DealWithCountdownTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19fd1158"
  
)

/* harmony default export */ var DealWithCountdownTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/banner/BannerStyleFive.vue?vue&type=template&id=4a68886a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"banner-area pt-80 pb-60"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">","</div>",[_vm._ssrNode("<div class=\"single-banner mb-30\">","</div>",[_c('n-link',{attrs:{"to":"/shop"}},[_c('img',{attrs:{"src":"/img/tsotan/shireenii_gol_suuri/nuxt/shireni_gol_bugatai_570x300.jpg","alt":"image"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">","</div>",[_vm._ssrNode("<div class=\"single-banner mb-30\">","</div>",[_c('n-link',{attrs:{"to":"/shop"}},[_c('img',{attrs:{"src":"/img/tsotan/shireenii_gol_suuri/nuxt/shireni_gol_mongol_hee_tsugluulaga_570x300.jpg","alt":"image"}})])],1)])],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/banner/BannerStyleFive.vue?vue&type=template&id=4a68886a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/banner/BannerStyleFive.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9a84f5e4"
  
)

/* harmony default export */ var BannerStyleFive = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=66027b3e&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"home-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('HeroSliderTsotan'),_vm._ssrNode(" "),_c('BrandLogoCarousel'),_vm._ssrNode(" "),_c('BannerStyleFive'),_vm._ssrNode(" "),_c('DealWithCountdownTwo'),_vm._ssrNode(" "),_c('BlogWrapper'),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=66027b3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 51)),HeroSliderTsotan:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64)),BrandLogoCarousel:()=>__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 111)),BannerStyleFive:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68)),DealWithCountdownTwo:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 65)),BlogWrapper:()=>__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 110)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 52))},head(){return{title:'Tsotan'};}});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3092c51b"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(51).default,HeroSliderTsotan: __webpack_require__(64).default,BannerStyleFive: __webpack_require__(68).default,DealWithCountdownTwo: __webpack_require__(65).default,TheFooter: __webpack_require__(52).default})


/***/ })

};;
//# sourceMappingURL=index.js.map