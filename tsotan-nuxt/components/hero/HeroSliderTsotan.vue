<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide class="single-slider single-slider-10 slider-height-8 bg-gray-2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center">
                            <div class="slider-content slider-content-10 slider-animation-1">
                                <h3>Tsotan</h3>
                                <h1>Mongolia<br>Футболк</h1>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">Худалдан авах</n-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="slider-singleimg-hm10 ml-40 mr-40 slider-img-animation">
                                <img src="/img/tsotan/futbolk/mongolia/mongolia02.jpg" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="single-slider single-slider-10 slider-height-8 bg-gray-2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center">
                            <div class="slider-content slider-content-10 slider-animation-1">
                                <h3>Аравч</h3>
                                <h1>Таван нүдэн<br> аравч 2023</h1>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">Худалдан авах</n-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="slider-singleimg-hm10 ml-40 mr-40 slider-img-animation">
                                <img src="/img/tsotan/aravch/Tavan nuden aravch.jpg" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 6000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            }
        },
    };
</script>