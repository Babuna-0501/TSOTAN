<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img ad">
            <h4 class="discount">Хямдрал дуусахад 7 хоног үлдлээ</h4>
            <img src="../../assets/tsotan/aravch/Tavan_nuden_aravch.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ["Ad"],

        methods: {
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },
    };
</script>

<style>
    .ad {
        position: relative;
    }
    @media screen and (min-width: 768px) {
        .ad {
          height: 320px;
        }
    }
    .discount {
        position: absolute;
        top: 20%;
        left: 40%;
        z-index: 2;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-stretch: normal;
        font-size: 26px;
        font-weight: 600;
    }
</style>
