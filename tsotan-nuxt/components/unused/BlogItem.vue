<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img">
            <iframe
                width="560"
                height="315"
                :src="banner"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        props: {
            videoId: String, // The YouTube video ID
        },

        data() {
            return {
                banner: ""
            }
        },
        mounted() {
            this.fetchData();
        },
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
            },
            async fetchData() {
                try {
                    const result = await axios.get('https://rest.tsotan.mn/banner/list', {
                    params: {type: 'video'}
                    });
                    this.banner = result.data[0].url;
                    console.log(this.banner.url);
                } catch (error) {
                    console.error(error);
                }
            },
        },
    };
</script>