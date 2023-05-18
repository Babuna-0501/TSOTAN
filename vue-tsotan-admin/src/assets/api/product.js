import axios from 'axios';

// const gwUrl = `${process.env.VUE_APP_DEPOSIT_URL}`;
const url = "https://api.tsotan.mn";
export default {


    //  TODO : buh endpointoo endees avah

    async createProduct(productDto) {
        return axios.post(`${url}/product-type/list`, productDto);
    },

    async getCategoryList() {
        console.log("category list")
        return axios.get(`${url}/category/list`);
    },

    async uploadImg(img) {
        return axios.post(`${url}/product/image`, img);
    },

    async login(data) {
        return axios.post(`${url}/user/login`, data);
    }

};