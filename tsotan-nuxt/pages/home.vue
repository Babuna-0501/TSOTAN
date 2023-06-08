<template>
    <div class="home-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <HeroSliderTsotan />
        <BannerStyleFive />
        <DealWithCountdownTwo />
        <ServicePolicyTwo />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            HeroSliderTsotan: () => import('@/components/hero/HeroSliderTsotan'),
            BannerStyleFive: () => import('@/components/banner/BannerStyleFive'),
            DealWithCountdownTwo: () => import('@/components/DealWithCountdownTwo'),
            ServicePolicyTwo: () => import('@/components/policy/ServicePolicyTwo'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Tsotan'
            }
        },
    };
</script>


