import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _7125ac02 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1a97ecbe = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _21a53c47 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _196b662f = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _89d11666 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4488e312 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _2df7f6e3 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _24b268e2 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _f241ca3e = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _7492ee92 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _299dd9fc = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _299933a1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _d8af1e80 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _e6f40f0a = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _de5fa3be = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _4e8dd115 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6f277aba = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _0b4d5827 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _778d7d51 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _46f371c2 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _94a1eaa4 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _70132df8 = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _dc1c6110 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6bb7049f = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
>>>>>>> cfb753a4a866eb112179e329817d666814ae0098

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _d8af1e80,
    name: "blog"
  }, {
    path: "/cart",
    component: _e6f40f0a,
    name: "cart"
  }, {
    path: "/checkout",
    component: _de5fa3be,
    name: "checkout"
  }, {
    path: "/contact",
    component: _4e8dd115,
    name: "contact"
  }, {
<<<<<<< HEAD
=======
    path: "/home",
    component: _6f277aba,
    name: "home"
  }, {
>>>>>>> cfb753a4a866eb112179e329817d666814ae0098
    path: "/my-account",
    component: _0b4d5827,
    name: "my-account"
  }, {
    path: "/shop",
    component: _778d7d51,
    name: "shop"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _46f371c2,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _94a1eaa4,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _70132df8,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _dc1c6110,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _6bb7049f,
    name: "product-slug"
  }, {
    path: "/",
    component: _299933a1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
