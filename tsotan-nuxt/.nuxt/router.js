import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _11e399cc = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _09701674 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _2f18a79a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _08611909 = () => interopDefault(import('..\\pages\\confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _81f87708 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _395d5760 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _1710c96c = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _43f8af1d = () => interopDefault(import('..\\pages\\shop-new.vue' /* webpackChunkName: "pages/shop-new" */))
const _1c485c36 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _ed19afbc = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _4574af40 = () => interopDefault(import('..\\pages\\product\\product-detail\\_slug.vue' /* webpackChunkName: "pages/product/product-detail/_slug" */))
const _102cf884 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2b427da4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _11e399cc,
    name: "blog"
  }, {
    path: "/cart",
    component: _09701674,
    name: "cart"
  }, {
    path: "/checkout",
    component: _2f18a79a,
    name: "checkout"
  }, {
    path: "/confirmation",
    component: _08611909,
    name: "confirmation"
  }, {
    path: "/contact",
    component: _81f87708,
    name: "contact"
  }, {
    path: "/my-account",
    component: _395d5760,
    name: "my-account"
  }, {
    path: "/shop",
    component: _1710c96c,
    name: "shop"
  }, {
    path: "/shop-new",
    component: _43f8af1d,
    name: "shop-new"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _1c485c36,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _ed19afbc,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-detail/:slug?",
    component: _4574af40,
    name: "product-product-detail-slug"
  }, {
    path: "/blog/:slug",
    component: _102cf884,
    name: "blog-slug"
  }, {
    path: "/",
    component: _2b427da4,
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
