import axios from "axios";
import { api } from "./api_address";

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization: `Bearer ${jwt}`,
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
    rooms: (page = 1) => callApi("get", `/rooms/?page=${page}`),
    favs: id => callApi("get", `/users/${id}/favs/`),
    toggleFavs: (userId, roomId, token) =>
        callApi("put", `/users/${userId}/favs/`, { pk: roomId }, token)
};
