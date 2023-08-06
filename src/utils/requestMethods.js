import axios from "axios"

const BASE_URL = "http://localhost:8000/api/"

export const apiRequests = axios.create({
    baseURL:BASE_URL,withCredentials:true
})





