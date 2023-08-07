<template>
    <div class="blog-area pb-55 mt-50">
        <div class="container">
            <SectionTitleWithSubTitle title="Манай үйлчилгээ" classes="section-title mb-55" />
            <div class="row enter">
                <div class="col-lg-6 col-sm-6 column">
                    <BlogItem />
                </div>
                <div class="col-lg-6 col-sm-6 column">
                    <Ad/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            BlogItem: () => import('@/components/unused/BlogItem'),
            Ad: () => import('@/components/unused/Ad')
        },
    };
</script>

<style>
    @media screen and (min-width: 768px) {
        .enter {
           display: flex;
           flex-direction: row;
        }
    }
</style>