exports.ids = [16];
exports.modules = {

/***/ 70:
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
  "3934e8ca"
  
)

/* harmony default export */ var DealWithCountdownTwo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=deal-with-countdown-two.js.map