import axios from "axios";

export const req = axios.create({
    baseURL: process.env.NEXT_SECRET_FRIEND_API
})