<template>
    <div class="home-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <HeroSliderTsotan />
        <BrandLogoCarousel/>
        <BannerStyleFive />
        <DealWithCountdownTwo />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>


    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            HeroSliderTsotan: () => import('@/components/hero/HeroSliderTsotan'), 
            BrandLogoCarousel: () => import('@/components/unused/BrandLogoCarousel'),
            BannerStyleFive: () => import('@/components/banner/BannerStyleFive'),
            DealWithCountdownTwo: () => import('@/components/DealWithCountdownTwo'),
            BlogWrapper: () => import('@/components/unused/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Tsotan'
            }
        },
    };
</script>


