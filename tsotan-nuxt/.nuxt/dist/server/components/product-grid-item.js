exports.ids = [35];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=fef649e4&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<ul><li><h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <p>"+_vm._ssrEscape("Үнэ: "+_vm._s(_vm.product.price)+" ₮")+"</p> <div class=\"product-details-img\"><div class=\"product-badges\">"+(_vm.product.isNew?"<span class=\"product-label pink\">New</span>":"<!---->")+" "+(_vm.product.isSpecial?"<span class=\"product-label purple\">Special</span>":"<!---->")+"</div> <img"+_vm._ssrAttr("src",_vm.getImg(_vm.product.img))+_vm._ssrAttr("alt",_vm.product.name)+" class=\"img-fluid\"></div> <p>"+_vm._ssrEscape("Категори: "+_vm._s(_vm.product.parentCategory))+"</p></li></ul>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=fef649e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({props:["product","layout"],methods:{handleProductClick(productId){this.$router.push(`/product/product-detail/${productId}`);},addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},onClick(product){this.$modal.show('quickview',product);},getImg(imgUrl){return imgUrl;}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f86e7a5c"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-grid-item.js.map