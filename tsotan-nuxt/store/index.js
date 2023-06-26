import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export const state = () => ({
    products: [],
    categories: [],
    cart: [],
    wishlist: [],
    compare: []
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },

    getCategories(state) {
        return state.categories
    },

    getCart: state => {
        return state.cart
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            total += price * item.cartQuantity
        })

        return total;
    },

    getNewProducts: state => {
        return state.products.filter(item => {
            return item.new
        })
    },
    getBestProducts: state => {
        return state.products.filter(item => {
            return item.best
        })
    },
    // getSaleProducts: state => {
    //     return state.products.filter(item => {
    //         return item.discount
    //     })
    // },

    parentCategoryList: state => {
        // return [...new Set(state.products.map((list) => list.parentCategory).flat())]
        return state.categories;
    },

}


// contains your mutations
export const mutations = {

    SET_PRODUCT(state, product) {
        state.products = product
    },

    SET_CATEGORIES(state, category) {
        state.categories = category
    },

    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            // const price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity
            item.total = item.cartQuantity * item.price
        } else {
            // const price = payload.discount ? payload.price - (payload.price *(payload.discount)/100) : payload.price;
            state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: payload.price })
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        const price = found.discount ? found.price - (found.price *(found.discount)/100) : found.price;
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        found.total = found.cartQuantity * price
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
}


// contains your actions
export const actions = {

    async fetchProducts({ commit }) {
        try {
            const response = await axios.get('https://rest.tsotan.mn/product/list');
            commit('SET_PRODUCT', response.data);
        } catch (error) {
            console.error(error);
        }
    },

    async fetchCategories({ commit }) {
        try {
            const response = await axios.get('https://rest.tsotan.mn/category/list/0');
            commit('SET_CATEGORIES', response.data);

        } catch (error) {
            console.error(error);
        }
    },

    addToCartItem({commit}, payload) {
        console.log()
        commit('UPDATE_CART', payload)
    },

    removeProductFromCart({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },

}

