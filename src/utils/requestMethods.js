import axios from "axios"

const BASE_URL = "https://desk-api.vercel.app/api/"

export const apiRequests = axios.create({
    baseURL:BASE_URL,withCredentials:true
})





