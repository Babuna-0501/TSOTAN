import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c7eb1ab = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _618ee916 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _41acb41b = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6128fd0a = () => interopDefault(import('..\\pages\\confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _0d28b84a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _11bf70be = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _8b7fdf6a = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _568cbb9e = () => interopDefault(import('..\\pages\\shop-new.vue' /* webpackChunkName: "pages/shop-new" */))
const _22dd46b7 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _3e777663 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _2735f501 = () => interopDefault(import('..\\pages\\product\\product-detail\\_slug.vue' /* webpackChunkName: "pages/product/product-detail/_slug" */))
const _0ac81063 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _44b62766 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0c7eb1ab,
    name: "blog"
  }, {
    path: "/cart",
    component: _618ee916,
    name: "cart"
  }, {
    path: "/checkout",
    component: _41acb41b,
    name: "checkout"
  }, {
    path: "/confirmation",
    component: _6128fd0a,
    name: "confirmation"
  }, {
    path: "/contact",
    component: _0d28b84a,
    name: "contact"
  }, {
    path: "/my-account",
    component: _11bf70be,
    name: "my-account"
  }, {
    path: "/shop",
    component: _8b7fdf6a,
    name: "shop"
  }, {
    path: "/shop-new",
    component: _568cbb9e,
    name: "shop-new"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _22dd46b7,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _3e777663,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-detail/:slug?",
    component: _2735f501,
    name: "product-product-detail-slug"
  }, {
    path: "/blog/:slug",
    component: _0ac81063,
    name: "blog-slug"
  }, {
    path: "/",
    component: _44b62766,
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
