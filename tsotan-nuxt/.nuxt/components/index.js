export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as ContactInfo } from '../../components/ContactInfo.vue'
export { default as DealWithCountdown } from '../../components/DealWithCountdown.vue'
export { default as DealWithCountdownTwo } from '../../components/DealWithCountdownTwo.vue'
export { default as FooterStyleTwo } from '../../components/FooterStyleTwo.vue'
export { default as HeaderLogoCenterWithTransparent } from '../../components/HeaderLogoCenterWithTransparent.vue'
export { default as HeaderOffcanvasMenuWithTransparent } from '../../components/HeaderOffcanvasMenuWithTransparent.vue'
export { default as HeaderWithTopBarTwo } from '../../components/HeaderWithTopBarTwo.vue'
export { default as HeaderWithTopbar } from '../../components/HeaderWithTopbar.vue'
export { default as HomeSidebarMenu } from '../../components/HomeSidebarMenu.vue'
export { default as Login } from '../../components/Login.vue'
export { default as MiniCart } from '../../components/MiniCart.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as QuickView } from '../../components/QuickView.vue'
export { default as ResponsiveMobileMenu } from '../../components/ResponsiveMobileMenu.vue'
export { default as ShopSidebar } from '../../components/ShopSidebar.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as BannerItem } from '../../components/banner/BannerItem.vue'
export { default as BannerStyleFive } from '../../components/banner/BannerStyleFive.vue'
export { default as BannerStyleFour } from '../../components/banner/BannerStyleFour.vue'
export { default as BannerStyleOne } from '../../components/banner/BannerStyleOne.vue'
export { default as BannerStyleSix } from '../../components/banner/BannerStyleSix.vue'
export { default as BannerStyleThree } from '../../components/banner/BannerStyleThree.vue'
export { default as BannerStyleTwo } from '../../components/banner/BannerStyleTwo.vue'
export { default as HeroSlider } from '../../components/hero/HeroSlider.vue'
export { default as HeroSliderTsotan } from '../../components/hero/HeroSliderTsotan.vue'
export { default as PolicyServicePolicy } from '../../components/policy/ServicePolicy.vue'
export { default as PolicyServicePolicyFive } from '../../components/policy/ServicePolicyFive.vue'
export { default as PolicyServicePolicyFour } from '../../components/policy/ServicePolicyFour.vue'
export { default as PolicyServicePolicyThree } from '../../components/policy/ServicePolicyThree.vue'
export { default as PolicyServicePolicyTwo } from '../../components/policy/ServicePolicyTwo.vue'
export { default as ProductDetailsWrapper } from '../../components/product/ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../../components/product/ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../../components/product/ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../../components/product/ProductGridStyleThree.vue'
export { default as ProductNewWrapper } from '../../components/product/ProductNewWrapper.vue'
export { default as ProductWrapper } from '../../components/product/ProductWrapper.vue'
export { default as ProductWrapperBooks } from '../../components/product/ProductWrapperBooks.vue'
export { default as ProductWrapperCosmetics } from '../../components/product/ProductWrapperCosmetics.vue'
export { default as ProductWrapperFive } from '../../components/product/ProductWrapperFive.vue'
export { default as ProductWrapperFour } from '../../components/product/ProductWrapperFour.vue'
export { default as ProductWrapperSeven } from '../../components/product/ProductWrapperSeven.vue'
export { default as ProductWrapperThree } from '../../components/product/ProductWrapperThree.vue'
export { default as ProductWrapperTsotan } from '../../components/product/ProductWrapperTsotan.vue'
export { default as ProductWrapperTwo } from '../../components/product/ProductWrapperTwo.vue'
export { default as UnusedAboutMission } from '../../components/unused/AboutMission.vue'
export { default as UnusedBlogItem } from '../../components/unused/BlogItem.vue'
export { default as UnusedBlogItemStyleTwo } from '../../components/unused/BlogItemStyleTwo.vue'
export { default as UnusedBlogSidebar } from '../../components/unused/BlogSidebar.vue'
export { default as UnusedBlogWrapper } from '../../components/unused/BlogWrapper.vue'
export { default as UnusedBrandLogoCarousel } from '../../components/unused/BrandLogoCarousel.vue'
export { default as UnusedFunFact } from '../../components/unused/FunFact.vue'
export { default as UnusedInstagramPostWrapper } from '../../components/unused/InstagramPostWrapper.vue'
export { default as UnusedNewsletterStyleOne } from '../../components/unused/NewsletterStyleOne.vue'
export { default as UnusedProductDetailsDescriptionReview } from '../../components/unused/ProductDetailsDescriptionReview.vue'
export { default as UnusedRegister } from '../../components/unused/Register.vue'
export { default as UnusedSectionTitleWithSubTitle } from '../../components/unused/SectionTitleWithSubTitle.vue'
export { default as UnusedTeamMembers } from '../../components/unused/TeamMembers.vue'
export { default as UnusedTestimonialOne } from '../../components/unused/TestimonialOne.vue'
export { default as UnusedWelcomeMessage } from '../../components/unused/WelcomeMessage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
