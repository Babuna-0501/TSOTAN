<template>
    <div class="brand-logo-area pt-100 about-brand-logo">
        <div class="container">
            <h4 style="text-align: center; font-family: Poppins, sans-serif; font-weight: 500; font-size: 20px; font-stretch: normal;" class="pb-20">Манай үйлчилгээ</h4>
            <div class="brand-logo-active">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide">
                        <h5>Бүтээгдэхүүн</h5>
                        <img src="../../static/img/brand-logo/bogts_tsunh_200x200.jpg" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>DTF DTG хэвлэл</h5>
                        <img src="../../static/img/brand-logo/DTF_200x200.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Уут цүнх</h5>
                        <img src="../../static/img/brand-logo/eko_uut_tsunh__200x200.jpg" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Хатгамал</h5>
                        <img src="../../static/img/brand-logo/hatgamal_200x200.jpg" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Лазер</h5>
                        <img src="../../static/img/brand-logo/laser__200x200.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Шошго</h5>
                        <img src="../../static/img/brand-logo/shoshgo_hevlel_200x200.jpg" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Шүр шигтгээ</h5>
                        <img src="../../static/img/brand-logo/shvr_shigtgee_200x200.jpg" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <h5>Холст хэвлэл</h5>
                        <img src="../../static/img/brand-logo/uran_zurag_holst_hevlel_200x200.jpg" alt="">
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                brandLogoCarousel: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    autoplay: true,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        }
                    }
                }
            }
        },
    };
</script>