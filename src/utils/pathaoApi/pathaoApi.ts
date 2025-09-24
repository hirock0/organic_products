import axios from "axios";



export const pathaoApi = axios.create({
    baseURL: "https://courier-api-sandbox.pathao.com",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});
