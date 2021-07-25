import axios from "axios";
import { api } from "./api_address";

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = `${api}/api/v1`;
    const fullUrl = `${baseUrl}${path}`;
    if (method === "get" || method === "delete") {
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

export default {
    createAccount: form => callApi("post", "/users/", form),
    login: form => callApi("post", "/users/login/", form),
    rooms: page => callApi("get", `/rooms/?page=${page}`)
};

