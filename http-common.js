import axios from "axios";

export const HTTP = axios.create({
    baseURL: 'https://full-stack-shop-api.herokuapp.com/',
})