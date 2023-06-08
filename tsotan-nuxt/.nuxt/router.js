import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a69cfb0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5bfef910 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _03fcdc36 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _20b88c60 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3ea07b4f = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _6606d4fc = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _47067de6 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _51c7d8d2 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _5d05edbe = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _138385e0 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _78b32e68 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _10738aab = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

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
    component: _7a69cfb0,
    name: "blog"
  }, {
    path: "/cart",
    component: _5bfef910,
    name: "cart"
  }, {
    path: "/checkout",
    component: _03fcdc36,
    name: "checkout"
  }, {
    path: "/contact",
    component: _20b88c60,
    name: "contact"
  }, {
    path: "/",
    component: _3ea07b4f,
    name: "home"
  }, {
    path: "/my-account",
    component: _6606d4fc,
    name: "my-account"
  }, {
    path: "/shop",
    component: _47067de6,
    name: "shop"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _51c7d8d2,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _5d05edbe,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _138385e0,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _78b32e68,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _10738aab,
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
