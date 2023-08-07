<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img">
            <iframe
                width="560"
                height="315"
                :src="embedUrl"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            videoId: String, // The YouTube video ID
        },
        computed: {
            embedUrl() {
            return `https://www.youtube.com/embed/SdPM8t1h3kY?autoplay=1&loop=1&autopause=0&muted=1`;
            },
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
            }
        },
    };
</script>