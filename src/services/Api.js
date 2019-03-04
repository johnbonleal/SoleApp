import { create } from 'axios';
import { Constants } from '../configs';

const removeEmpty = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
        else if (obj[key] == null) delete obj[key];
    });
    return obj;
};

const transformParams = params => JSON.stringify(params);

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const config = {
    baseURL: Constants.API_URL,
    timeOut: 10000,
    headers,
    transformRequest: [transformParams]
};

export const axios = create(config);

const get = (url, params) => {
    // console.log("URL: ", url);
    // console.log("Params: ", params);
    const customParams = removeEmpty({
        params: {
            ...params,
            access_token: null
        },
        headers: {
            'X-Access-Token': params.access_token ? params.access_token : null
        }
    })
    return axios.get(url, customParams)
}

const post = (url, params) => axios.post(url, params);

const put = (url, params) => {
    const customParams = removeEmpty({
        params: {
            ...params,
            access_token: null
        },
        headers: {
            'X-Access-Token': params.access_token ? params.access_token : null
        }
    })
    return axios.put(url, customParams)
}

const api = {
    USER_LOGIN: params => post('/users/login', params),
    USER_LOGOUT: params => post('/users/logout', params),
    FETCH_MERCHANT: params => get('/merchants', params),
    FETCH_MERCHANT_BY_PAGE: params => get(`/merchant_paginated?page=${params.page}&location=${params.location}&category_id=${params.category}&limit=${params.limit}`, params),
    FETCH_MERCHANT_NEW: params => get('/new_merchants', params),
    FETCH_MERCHANT_NEARBY: params => get(`/merchant_nearby?latitude=${params.latitude}&longitude=${params.longitude}`, params),
    FETCH_TOP_DEAL: params => get('/top_deals', params)
};

export default api;