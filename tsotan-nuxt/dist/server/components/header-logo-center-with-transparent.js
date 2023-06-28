exports.ids = [18];
exports.modules = {

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderLogoCenterWithTransparent.vue?vue&type=template&id=f4feef46&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header"+_vm._ssrClass("header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar",{'is-sticky':_vm.isSticky})+">","</header>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-5 col-lg-6 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu menu-white\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo text-center logo-hm5\">","</div>",[_c('n-link',{staticClass:"sticky-none",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-2.png","alt":"brand logo"}})]),_vm._ssrNode(" "),_c('n-link',{staticClass:"sticky-block",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"brand logo"}})])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5 col-lg-4 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap header-right-wrap-white\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Register")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("my account")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-compare\">","</div>",[_c('n-link',{attrs:{"to":"/compare"}},[_c('i',{staticClass:"pe-7s-shuffle"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.compareItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])]),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderLogoCenterWithTransparent.vue?vue&type=template&id=f4feef46&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderLogoCenterWithTransparent.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderLogoCenterWithTransparentvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))},computed:{cartItemCount(){return this.$store.getters.cartItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderLogoCenterWithTransparent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderLogoCenterWithTransparentvue_type_script_lang_js_ = (HeaderLogoCenterWithTransparentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderLogoCenterWithTransparent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderLogoCenterWithTransparentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a4b27e8"
  
)

/* harmony default export */ var HeaderLogoCenterWithTransparent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(20).default,MiniCart: __webpack_require__(18).default,OffCanvasMobileMenu: __webpack_require__(19).default})


/***/ })

};;
//# sourceMappingURL=header-logo-center-with-transparent.js.map