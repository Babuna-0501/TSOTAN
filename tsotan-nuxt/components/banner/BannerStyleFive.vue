<template>
    <div class="banner-area pt-80 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single-banner mb-30">
                            <img :src="banner1" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single-banner mb-30">
                            <img :src="banner2" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   import axios from "axios";

   export default {
        data() {
            return {
                banner1 : "",
                banner2 : "",
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
            console.log('fetch data')
            try {
                const result = await axios.get('https://rest.tsotan.mn/banner/list', {
                params: { type: 'monthly' }
                });
                this.banner1 = result.data[0].url;
                this.banner2 = result.data[1].url;
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
            },
        },
    };


</script>