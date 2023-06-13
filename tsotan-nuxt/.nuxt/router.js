import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

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
    path: "/home",
    component: _6f277aba,
    name: "home"
  }, {
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
