import axios from "axios"

export const ApiService = axios.create({

    baseURL: 'http://localhost:7195/api',
    headers: {
        'Content-Type': 'application/json'
    }
})