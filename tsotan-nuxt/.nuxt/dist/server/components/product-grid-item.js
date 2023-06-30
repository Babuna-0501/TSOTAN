exports.ids = [31];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=8369c7d2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<ul><li><h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <p>"+_vm._ssrEscape("Үнэ: "+_vm._s(_vm.product.price)+" ₮")+"</p> <p><img"+_vm._ssrAttr("src",_vm.getImg(_vm.product.img1))+"></p> <p>"+_vm._ssrEscape("Дэлгэрэнгүй: "+_vm._s(_vm.product.description))+"</p> <p>"+_vm._ssrEscape("Категори: "+_vm._s(_vm.product.parentCategory))+"</p></li></ul>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=8369c7d2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({// created() {
//     axios.get('https://rest.tsotan.mn/product/list/${id}')
//         .then(response => {
//         this.productList = response.data;
//         })
//         .catch(error => {
//         console.error(error);
//     });
// },
//
// data() {
//     return {
//         productList: []
//     };
// },
props:["product","layout"],methods:{// getImgUrl() {
//   return this.product.imgUrl;
// },
addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},onClick(product){this.$modal.show('quickview',product);},getImg(imgUrl){return imgUrl;}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dc126fb"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-grid-item.js.map