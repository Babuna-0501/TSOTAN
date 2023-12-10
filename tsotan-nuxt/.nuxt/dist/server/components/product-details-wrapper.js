exports.ids = [34];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductDetailsWrapper.vue?vue&type=template&id=021180f0&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"shop-area pt-100 pb-100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-slider\">","</div>",[_vm._ssrNode("<div class=\"product-details-img\">","</div>",[_vm._ssrNode("<div class=\"product-badges\">"+(_vm.product.isNew?"<span class=\"product-label pink\">New</span>":"<!---->")+"</div> "),_c('swiper',{ref:"swiperTop",attrs:{"options":_vm.swiperOptionTop}},[_vm._l(_vm.product.image,function(image,index){return _c('div',{key:index,staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.title}})]);}),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2),_vm._ssrNode(" "),_c('swiper',{ref:"swiperThumbs",staticClass:"mt-2",attrs:{"options":_vm.swiperOptionThumbs}},_vm._l(_vm.product.image,function(image,index){return _c('div',{key:index,staticClass:"thumb-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":image,"alt":_vm.product.title}})]);}),0)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-content ml-70\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</h2> <div class=\"product-details-price\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price.toFixed(2)))+"</span>":"<!---->")+"</div> <div class=\"pro-details-rating-wrap\">"+(_vm.product.rating==5?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i></div>":"<!---->")+" "+(_vm.product.rating==4?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==3?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==2?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==1?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" <span><a href=\"#\">"+_vm._ssrEscape(_vm._s(_vm.product.rating)+" Reviews")+"</a></span></div> <p>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p> "+(_vm.product.variation?"<div class=\"pro-details-size-color\"><div class=\"pro-details-color-wrap\"><h6 class=\"label\">Color</h6> <div class=\"pro-details-color-content\">"+_vm._ssrList(_vm.product.variation.color,function(item,index){return"<label"+_vm._ssrClass("radio",item)+"><input type=\"radio\" name=\"colorGroup\"> <span class=\"check-mark\"></span></label>";})+"</div></div> <div class=\"pro-details-size-wrap\"><h6 class=\"label\">Size</h6> <div class=\"pro-details-size-content\">"+_vm._ssrList(_vm.product.variation.sizes,function(item,index){return"<label class=\"radio\"><input type=\"radio\" name=\"sizeGroup\"> <span class=\"check-mark\">"+_vm._ssrEscape(_vm._s(item))+"</span></label>";})+"</div></div></div>":"<!---->")+" <div class=\"pro-details-quality\"><div class=\"cart-plus-minus\"><button class=\"dec qtybutton\">-</button> <input type=\"text\" readonly=\"readonly\""+_vm._ssrAttr("value",_vm.singleQuantity)+" class=\"cart-plus-minus-box\"> <button class=\"inc qtybutton\">+</button></div> <div class=\"pro-details-cart btn-hover\"><button>Add To Cart</button></div> <div class=\"pro-details-wishlist\"><button title=\"wishlist\"><i class=\"fa fa-heart-o\"></i></button></div> <div class=\"pro-details-compare\"><button title=\"compare\"><i class=\"pe-7s-shuffle\"></i></button></div></div> "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">Categories:</span> "),_vm._ssrNode("<ul>","</ul>",_vm._l(_vm.product.category,function(category,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=${_vm.slugify(category)}`}},[_vm._v(_vm._s(category)+",")])],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">Tag:</span> "),_vm._ssrNode("<ul>","</ul>",_vm._l(_vm.product.tag,function(tag,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?tag=${_vm.slugify(tag)}`}},[_vm._v(_vm._s(tag)+",")])],1);}),0)],2),_vm._ssrNode(" <div class=\"pro-details-social\"><ul><li><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li> <li><a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fa fa-dribbble\"></i></a></li> <li><a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fa fa-pinterest-p\"></i></a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"https://www.linkedin.com/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div>")],2)])],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=template&id=021180f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductDetailsWrappervue_type_script_lang_js_ = ({props:['product'],data(){return{singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',loopedSlides:5,// looped slides should be the same
navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},swiperOptionThumbs:{loop:true,spaceBetween:10,centeredSlides:true,slidesPerView:5,freeMode:true,watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:true,loopedSlides:5// looped slides should be the same
}};},mounted(){this.$nextTick(()=>{const swiperTop=this.$refs.swiperTop.$swiper;const swiperThumbs=this.$refs.swiperThumbs.$swiper;swiperTop.controller.control=swiperThumbs;swiperThumbs.controller.control=swiperTop;});},methods:{addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(this.product.quantity>this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
// .replace(/[^\w-]+/g, "") // Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductDetailsWrappervue_type_script_lang_js_ = (ProductDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8899b2ec"
  
)

/* harmony default export */ var ProductDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-details-wrapper.js.map