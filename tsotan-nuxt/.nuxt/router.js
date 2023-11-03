import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _92d3fb4a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _cae4be76 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _f252bd2a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _0c087b4c = () => interopDefault(import('..\\pages\\confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _08b266ea = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _ccf7be1e = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _f4d5b4ca = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _c892ae24 = () => interopDefault(import('..\\pages\\shop-new.vue' /* webpackChunkName: "pages/shop-new" */))
const _6da29407 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _25c2a09a = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _52000651 = () => interopDefault(import('..\\pages\\product\\product-detail\\_slug.vue' /* webpackChunkName: "pages/product/product-detail/_slug" */))
const _96413dda = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _7cf280fd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _92d3fb4a,
    name: "blog"
  }, {
    path: "/cart",
    component: _cae4be76,
    name: "cart"
  }, {
    path: "/checkout",
    component: _f252bd2a,
    name: "checkout"
  }, {
    path: "/confirmation",
    component: _0c087b4c,
    name: "confirmation"
  }, {
    path: "/contact",
    component: _08b266ea,
    name: "contact"
  }, {
    path: "/my-account",
    component: _ccf7be1e,
    name: "my-account"
  }, {
    path: "/shop",
    component: _f4d5b4ca,
    name: "shop"
  }, {
    path: "/shop-new",
    component: _c892ae24,
    name: "shop-new"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _6da29407,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _25c2a09a,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-detail/:slug?",
    component: _52000651,
    name: "product-product-detail-slug"
  }, {
    path: "/blog/:slug",
    component: _96413dda,
    name: "blog-slug"
  }, {
    path: "/",
    component: _7cf280fd,
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
