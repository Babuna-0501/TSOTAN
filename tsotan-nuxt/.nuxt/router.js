import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7125ac02 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1a97ecbe = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _21a53c47 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _196b662f = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _89d11666 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4488e312 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _2df7f6e3 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _24b268e2 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _b1d08b26 = () => interopDefault(import('..\\pages\\product\\product-detail.vue' /* webpackChunkName: "pages/product/product-detail" */))
const _7492ee92 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _299dd9fc = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _299933a1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7125ac02,
    name: "blog"
  }, {
    path: "/cart",
    component: _1a97ecbe,
    name: "cart"
  }, {
    path: "/checkout",
    component: _21a53c47,
    name: "checkout"
  }, {
    path: "/contact",
    component: _196b662f,
    name: "contact"
  }, {
    path: "/my-account",
    component: _89d11666,
    name: "my-account"
  }, {
    path: "/shop",
    component: _4488e312,
    name: "shop"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _2df7f6e3,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _24b268e2,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-detail",
    component: _b1d08b26,
    name: "product-product-detail"
  }, {
    path: "/blog/:slug",
    component: _7492ee92,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _299dd9fc,
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
