import axios from "axios"

const BASE_URL = "https://desk-api-vincent-mumo.vercel.app/api/"

export const apiRequests = axios.create({
    baseURL:BASE_URL,withCredentials:true
})





