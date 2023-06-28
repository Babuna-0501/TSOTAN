(window.webpackJsonp=window.webpackJsonp||[]).push([[61,15,23,48],{323:function(t,e,n){"use strict";n.r(e);n(11),n(29),n(30);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,220))},MiniCart:function(){return Promise.resolve().then(n.bind(null,218))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=n(14),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.jpg",alt:"tsotan logo"}})])],1)]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky},staticStyle:{"background-color":"#60445D"}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{staticStyle:{color:"#000"},attrs:{href:"callto:3965410"}},[t._v("+976-9330 0991")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(220).default,MiniCart:n(218).default,OffCanvasMobileMenu:n(219).default})},324:function(t,e,n){"use strict";n.r(e);var o={},l=n(14),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a",color:"#fff"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row",staticStyle:{"justify-content":"space-around"}},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.jpg",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("© 2023 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Tsotan")]),t._v("."),e("br"),t._v(" All Rights Reserved")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-2 col-sm-4"},[t("div",{staticClass:"footer-widget mb-30 ml-50"},[t("div",{staticClass:"footer-title"}),this._v(" "),t("div",{staticClass:"footer-list"},[t("ul")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Follow us")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/tsotantextile",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/@Tsotan_textile",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/tsotan_mongolia/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Хаяг")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[t._v("\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        ")])])])])}],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var o={props:["pageTitle"]},l=n(14),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},332:function(t){t.exports=JSON.parse('[{"id":1,"title":"A guide to latest trends product","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","videoSource ":"/img/blog/blog-3.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":2,"title":"Five ways to lead a happy life","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","videoSource":"/img/tsotan/video/ts2.mp4","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":3,"title":"Tips on having a happy life forever","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-3.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30},{"id":4,"title":"New winter collection with discount","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-4.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 June, 2021","comment":52},{"id":5,"title":"New collection for this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-5.jpg","category":["lifestyle","men"],"author":"admin","date":"10 July, 2021","comment":35},{"id":6,"title":"Our best collection this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-6.jpg","category":["women","men"],"author":"admin","date":"18 January, 2021","comment":40},{"id":7,"title":"Tempor incididunt labo dolor magna","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-7.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":8,"title":"Lorem ipsum dolor sit amet consectetur","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-8.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":9,"title":"Reprehendrit in voluptate velit cillum","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-9.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30}]')},397:function(t,e,n){"use strict";n.r(e);n(11),n(29),n(30),n(55),n(221);var o=n(332),l={components:{HeaderWithTopbar:function(){return Promise.resolve().then(n.bind(null,323))},BlogItemStyleTwo:function(){return n.e(0).then(n.bind(null,429))},BlogSidebar:function(){return n.e(1).then(n.bind(null,430))},TheFooter:function(){return Promise.resolve().then(n.bind(null,324))}},data:function(){return{blogData:o,currentPage:1,perPage:6}},computed:{getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.blogData.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.blogData.length/this.perPage)}},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)}},head:function(){return{title:"Blog Right Sidebar"}}},r=n(14),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"blog right sidebar"}}),t._v(" "),e("div",{staticClass:"blog-area pt-100 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"ml-20"},[e("div",{staticClass:"row"},t._l(t.getItems,(function(t,n){return e("div",{key:n,staticClass:"col-md-6 col-12"},[e("BlogItemStyleTwo",{attrs:{blog:t}})],1)})),0)]),t._v(" "),t.getPaginateCount>1?e("div",[e("pagination",{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":t.perPage,records:t.blogData.length,"page-count":t.getPaginateCount},on:{paginate:t.paginateClickCallback},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("BlogSidebar")],1)])])]),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(323).default,Breadcrumb:n(327).default,TheFooter:n(324).default})}}]);