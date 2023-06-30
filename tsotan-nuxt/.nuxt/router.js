import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ec344ef2 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _37c28182 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _6dfa48b0 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _481bd6ae = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _018abfee = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _22ca0658 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _443a39aa = () => interopDefault(import('../pages/shop-new.vue' /* webpackChunkName: "pages/shop-new" */))
const _2945b54a = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _330b87f2 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _2ab4671e = () => interopDefault(import('../pages/product/product-detail.vue' /* webpackChunkName: "pages/product/product-detail" */))
const _efa19182 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _c0f29910 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _f34c9040 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ec344ef2,
    name: "blog"
  }, {
    path: "/cart",
    component: _37c28182,
    name: "cart"
  }, {
    path: "/checkout",
    component: _6dfa48b0,
    name: "checkout"
  }, {
    path: "/contact",
    component: _481bd6ae,
    name: "contact"
  }, {
    path: "/my-account",
    component: _018abfee,
    name: "my-account"
  }, {
    path: "/shop",
    component: _22ca0658,
    name: "shop"
  }, {
    path: "/shop-new",
    component: _443a39aa,
    name: "shop-new"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _2945b54a,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _330b87f2,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-detail",
    component: _2ab4671e,
    name: "product-product-detail"
  }, {
    path: "/blog/:slug",
    component: _efa19182,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _c0f29910,
    name: "product-slug"
  }, {
    path: "/",
    component: _f34c9040,
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
