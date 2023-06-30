<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Барааны дэлгэрэнгүй" />
        
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-details-slider">
                            <div class="product-details-img">
<!--                                <div class="product-badges">-->
<!--                                    <span class="product-label pink" v-if="product.new">New</span>-->
<!--                                    <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>-->
<!--                                </div>-->
<!--                                <swiper :options="swiperOptionTop" ref="swiperTop">-->
<!--                                    <div class="large-img swiper-slide" v-for="(image, index) in product.images" :key="index">-->
<!--                                        <img class="img-fluid" :src="image" :alt="product.title">-->
<!--                                    </div>-->
<!--                                    <div class="quickview-nav swiper-button-prev">-->
<!--                                        <i class="pe-7s-angle-left"></i>-->
<!--                                    </div>-->
<!--                                    <div class="quickview-nav swiper-button-next">-->
<!--                                        <i class="pe-7s-angle-right"></i>-->
<!--                                    </div>-->
<!--                                </swiper>-->
<!--                                <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">-->
<!--                                    <div class="thumb-img swiper-slide" v-for="(image, index) in product.images" :key="index">-->
<!--                                        <img class="img-fluid" :src="image" :alt="product.title">-->
<!--                                    </div>-->
<!--                                </swiper>-->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-content ml-70">
<!--                            <h2>{{ product.title }}</h2>-->
                            <div class="product-details-price">
                                <span>${{ discountedPrice(product).toFixed(2) }}</span>
                                <!-- <span class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</span> -->
                            </div>
                            <p>{{ product.description }}</p>
                            <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">Сагсанд нэмэх</button>
                            </div>
                        </div>
                        <div class="pro-details-cart mt-20 mb-20">
                                <n-link class="empty-cart__button" to="/cart">Худалдан авах</n-link>
                            </div>
                            <div class="pro-details-meta">
                                <span class="label">Category:</span>
<!--                                <ul>-->
<!--                                    <li v-for="(category, index) in product.category" :key="index">-->
<!--                                        <n-link :to="`/shop?category=${category}`">{{ category }},</n-link>-->
<!--                                    </li>-->
<!--                                </ul>-->
                            </div>
<!--                            <div class="pro-details-meta">-->
<!--                                <span class="label">Tag:</span>-->
<!--                                <ul>-->
<!--                                    <li v-for="(tag, index) in product.tag" :key="index">-->
<!--                                        <n-link :to="`/shop?tag=${tag}`">{{ tag }},</n-link>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
                            <div class="pro-details-social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dribbble.com/" target="_blank">
                                            <i class="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="description-review-area pb-90 mt-30">
                                <div class="container">
                                    <div class="description-review-wrapper">
                                        <div class="tab-content description-review-bottom">
                                            <div id="des-details1" >
                                                <div class="product-anotherinfo-wrapper">
                                                    <ul>
                                                        <li><span>Weight</span> 400 g</li>
                                                        <li><span>Dimensions</span>10 x 10 x 15 cm </li>
                                                        <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                                        <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TheFooter />
    </div>
</template>

<script>
    import ProductDetailsDescriptionReview from "../../components/unused/ProductDetailsDescriptionReview.vue";

    export default {
        components: {
            ProductDetailsDescriptionReview,
        },
        data() {
            return {
                singleQuantity: 1,

                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

                swiperOptionThumbs: {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
                    loopedSlides: 4, // looped slides should be the same
                },
            }
        },

        computed: {
            product() {
              console.log("[+] : " + this.$store.getters.getProducts[0]);
                return this.$store.getters.getProducts[0];
            },
        },

        mounted() {
            // this.$nextTick(() => {
            //     const swiperTop = this.$refs.swiperTop.$swiper
            //     const swiperThumbs = this.$refs.swiperThumbs.$swiper
            //     swiperTop.controller.control = swiperThumbs
            //     swiperThumbs.controller.control = swiperTop
            // })
        },

        methods: {

            addToCart(product) {
                const prod = {...product, cartQuantity: this.singleQuantity}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Бараа аль хэдийн нэмэгдсэн' })
                } else {
                    this.$notify({ title: 'Бараа картанд нэмэгдлээ!'})
                }
                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
              console.log("discounted price : " + product.price);
              return product.price;
                // return product.price - (product.price * product.discount / 100)
            },

            increaseQuantity(){
                if(this.product.quantity > this.singleQuantity) this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to wishlist!' })
                } else {
                    this.$notify({ title: 'Add to wishlist successfully!'})
                }
                this.$store.dispatch('addToWishlist', product)
            },

            addToCompare(product) {
                // for notification
                if (this.$store.state.compare.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to compare!' })
                } else {
                    this.$notify({ title: 'Add to compare successfully!'})
                }
                this.$store.dispatch('addToCompare', product)
            }
        },

        head() {
            return {
                title: "Product Detail"
            }
        },
    };
</script>
