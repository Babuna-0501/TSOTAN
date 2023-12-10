exports.ids = [67,15,25,51];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=440e8b62&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"cart-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Барааны Сагс"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cart-main-area pt-90 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm.products.length>0?_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<h3 class=\"cart-page-title\">Таны картанд байгаа бараанууд</h3> "),_vm._ssrNode("<div class=\"table-content table-responsive cart-table-content\">","</div>",[_vm._ssrNode("<table>","</table>",[_vm._ssrNode("<thead><tr><th>Зураг</th> <th>Нэр</th> <th>Үнэ</th> <th>Тоо Хэмжээ</th> <th>Нийт үнэ</th> <th>Үйлдэл</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.products,function(product,index){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"product-thumbnail\">","</td>",[_c('n-link',{attrs:{"to":`/product/product-detail/${product.id}`}},[_c('img',{attrs:{"src":product.img,"alt":product.name}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"product-name\">","</td>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(product.name)}`}},[_vm._v(_vm._s(product.name))])],1),_vm._ssrNode(" <td class=\"product-price-cart\"><span class=\"amount\">"+_vm._ssrEscape(_vm._s(_vm.discountedPrice(product).toFixed(2))+"₮")+"</span></td> <td class=\"product-quantity\"><div class=\"cart-plus-minus\"><button class=\"dec qtybutton\">\n                        -\n                      </button> <input type=\"text\" readonly=\"readonly\""+_vm._ssrAttr("value",product.cartQuantity)+" class=\"cart-plus-minus-box\"> <button class=\"inc qtybutton\">\n                        +\n                      </button></div></td> <td class=\"product-subtotal\">"+_vm._ssrEscape("\n                    "+_vm._s(product.total.toFixed(2))+"₮\n                  ")+"</td> <td class=\"product-remove\"><button><i class=\"fa fa-times\"></i></button></td>")],2);}),0)],2)]),_vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-12\"><div class=\"cart-shiping-update-wrapper\"><div class=\"cart-clear\"><button>Картыг хоослох</button></div></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-12\">","</div>",[_vm._ssrNode("<div class=\"grand-total\">","</div>",[_vm._ssrNode("<div class=\"title-wrap\"><h4 class=\"cart-bottom-title section-bg-gary-cart\">Сагс</h4></div> <h5>\n                  Нийт бүтээгдэхүүн<span>"+_vm._ssrEscape(_vm._s(_vm.total.toFixed(2))+"₮")+"</span></h5> <h4 class=\"grand-total-title\">\n                  Нийт үнэ<span>"+_vm._ssrEscape(_vm._s(_vm.total.toFixed(2))+"₮")+"</span></h4> "),_c('n-link',{attrs:{"to":"/checkout"}},[_vm._v("Төлбөр төлөх")])],2)])])],2):_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"empty-cart text-center\">","</div>",[_vm._ssrNode("<div class=\"icon\"><i class=\"pe-7s-cart\"></i></div> <h4>Сагсанд бараа алга байна</h4> "),_c('n-link',{staticClass:"empty-cart__button",attrs:{"to":"/shop"}},[_vm._v("Дэлгүүр")])],2)])])])]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=440e8b62&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&
/* harmony default export */ var cartvue_type_script_lang_js_ = ({components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54))},data(){return{singleQuantity:1};},computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},methods:{incrementProduct(product){const prod={...product,cartQuantity:1};// if (product.cartQuantity < product.quantity) {
this.$store.dispatch("addToCartItem",prod);// }
},decrementProduct(product){const prod={...product,cartQuantity:1};if(product.cartQuantity>1){this.$store.dispatch("decreaseProduct",prod);}},removeProduct(product){// for notification
this.$notify({title:"Картнаас барааг хасах!"});this.$store.dispatch("removeProductFromCart",product);},discountedPrice(product){return product.price;},clearCart(){if(confirm("Картан дах барааг хоослох уу?")){// for notification
this.$notify({title:"Картнаас барааг хасах!"});this.$store.commit("CLEAR_CART");}},slugify(text){return String(text)// .toString()
.toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}},head(){return{title:"Cart"};}});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69fe4ad5"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=cart.js.map