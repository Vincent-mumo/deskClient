import axios from "axios"

const BASE_URL = "https://deskbackend.onrender.com/api/"

export const apiRequests = axios.create({
    baseURL:BASE_URL,withCredentials:true
})





