<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Барааны дэлгэрэнгүй" />
        
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-details-slider">
                            <div class="product-details-img" v-if="this.product.image">
                                <div class="product-badges">
                                    <span class="product-label pink" v-if="product.isNew">New</span>
                                </div>
                                <swiper :options="swiperOptionTop" ref="swiperTop">
                                    <div class="large-img swiper-slide" v-for="(image, index) in product.image" :key="index">
                                        <img class="img-fluid" :src="image" :alt="product.name">
                                    </div>
                                    <div class="quickview-nav swiper-button-prev">
                                        <i class="pe-7s-angle-left"></i>
                                    </div>
                                    <div class="quickview-nav swiper-button-next">
                                        <i class="pe-7s-angle-right"></i>
                                    </div>
                                </swiper>
                                <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                    <div class="thumb-img swiper-slide" v-for="(image, index) in product.image" :key="index">
                                        <img class="img-fluid" :src="image" :alt="product.name">
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-content ml-70">
                            <h2>{{ product.name }}</h2>
                            <div class="product-details-price">
                                <span>${{ product.price }}</span>
                            </div>
                            <p>{{ product.description }}</p>
                            <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart({
                                   id: product.id,
                              name: product.name,
                              price: product.price,
                              usdPrice: product.usdPrice,
                              parentCategory: product.parentCategory,
                              childCategory: product.childCategory,
                              category: product.category,
                              categoryId: product.categoryId,
                              img: product.image[0],
                              isSpecial: product.isSpecial,
                              isNew: product.isNew
                                })">Сагсанд нэмэх</button>
                            </div>
                        </div>
                        <div class="pro-details-cart mt-20 mb-20">
                                <a class="empty-cart__button" href="https://www.amazon.com/" target="_blank">Худалдан авах</a>
                            </div>
                            <div class="pro-details-meta">
                                <span class="label">Category:</span>
                                <ul>
                                    <li v-if="product.category">
                                      <n-link :to="`/shop?parent=${slugify(String(product.parentCategory))}&child=${slugify(String(product.childCategory))}&category=${slugify(String(product.category))}`">{{product.category}}</n-link>
                                    </li>
                                  <li v-if="product.childCategory">
                                    <n-link :to="`/shop?parent=${slugify(String(product.parentCategory))}&child=${slugify(String(product.childCategory))}`">{{product.childCategory}}</n-link>
                                  </li>
                                  <li v-if="product.parentCategory">
                                    <n-link :to="`/shop?parent=${slugify(String(product.parentCategory))}`">{{product.parentCategory}}</n-link>
                                  </li>
                                </ul>
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
                                                        <li><span>Хэмжээ:</span> {{product.size}}</li>
                                                        <li><span>Материал:</span>{{product.material}}</li>
                                                        <li><span>Угаах заавар:</span> {{product.instruction}}</li>
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
    import api from "../../../../api/product"
    export default {

        data() {
            return {
              id: 0,
              product: {
                image: [],
                name: null,
                // id: 0,
                price: 0,
                description: null,
                instruction: null,
                size: null,
                material: null,
                usdPrice: 0,
                categoryId: 0,
                parentCategory: null,
                childCategory: null,
                category: null,
                isSpecial: false,
                isNew: false,
              },
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

        mounted() {
          this.id = this.$route.params.slug;
          this.fetchData();
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },

        methods: {
          slugify(text) {
            const a = text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                // .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, "") // Trim - from end of text
                .replace(/,+/, "");
            // console.log('a : ' + a);
            return a;
          },
          async fetchData() {
            try {
              const res = await api.detail(this.id);
              const data = res.data;
              console.log("Response: ", data);
              this.product = data;
              this.product.id = data.id;
              this.product.image = data.image;
              this.product.name = data.name;
              // this.product.id = data.id;
              this.product.price = data.price;
              this.product.description = data.description;
              this.product.instruction = data.instruction;
              this.product.size = data.size;
              this.product.material = data.material;
              this.product.isSpecial = data.isSpecial;
              this.product.categoryId = data.categoryId;
              this.product.parentCategory = data.parentCategory;
              this.product.childCategory = data.childCategory;
              this.product.category = data.category;
              this.product.isNew = data.isNew;

              console.log("image", data);
            } catch (error) {
              console.log(error);
            }
          },

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

            // TODO : zasah
            increaseQuantity(){
                if(this.product.quantity > this.singleQuantity) this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

        },

        head() {
            return {
                title: "Product Detail"
            }
        },
    };
</script>
