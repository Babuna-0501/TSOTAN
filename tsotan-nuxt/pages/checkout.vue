<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Төлбөр төлөх" />
        
        <!-- checkout section start -->
        <div class="checkout-area pt-95 pb-100">
            <div class="container">
                <div class="row" v-if="products.length > 0">
                    <div class="col-lg-5">
                        <div class="your-order-area">
                            <h3>Таны захиалга</h3>
                            <div class="your-order-wrap gray-bg-4">
                                <div class="your-order-product-info">
                                    <div class="your-order-top">
                                        <ul>
                                            <li>Бараа</li>
                                            <li>Нийт үнэ</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-middle">
                                        <ul>
                                            <li v-for="(product, index) in products" :key="index">
                                                <span class="order-middle-left">{{ product.name }}  X  {{ product.cartQuantity }}</span> <span class="order-price">${{ product.total.toFixed(2) }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- <div class="your-order-bottom">
                                        <ul>
                                            <li class="your-order-shipping">Хүргэлт</li>
                                            <li>+5000</li>
                                        </ul>
                                    </div> -->
                                    <div class="your-order-total">
                                        <ul>
                                            <li class="order-total">Нийт</li>
                                            <li>${{ total.toFixed(2) }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="place-order mt-25">
                                <button class="btn-hover">Төлөх</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cash"></i>
                            </div>
                            <h4>No items found in cart to checkout</h4>
                            <n-link to="/shop" class="empty-cart__button">Shop Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- checkout section end -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
        computed: {
            products() {
                return this.$store.getters.getCart
            },

            total() {
                return this.$store.getters.getTotal
            },
        },

        head() {
            return {
                title: "Checkout"
            }
        },
    };
</script>
