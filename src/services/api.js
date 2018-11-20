import { create } from 'axios';
import { API_URL } from '../configs/constants';

const removeEmpty = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
        else if (obj[key] == null) delete obj[key];
    });
    return obj;
};

const transformParams = params => JSON.stringify(params);

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const config = {
    baseURL: API_URL,
    timeOut: 10000,
    headers,
    transformRequest: [transformParams]
};

export const axios = create(config);

const get = (url, params) => {
    const customParams = removeEmpty({
        params: {
            ...params,
            token: null
        },
        headers: {
            Authorization: (params.token) ? `Bearer ${params.token}` : null
        }
    })
    return axios.get(url, customParams)
}

const post = (url, params) => {
    const customParams = {
        ...params,
        token: null
    }
    return axios.post(url, customParams, {
        headers: {
            Authorization: (params.token) ? `Bearer ${params.token}` : null
        }
    });
}

const put = (url, params) => {
    const customParams = {
        ...params,
        token: null
    }
    return axios.put(url, customParams, {
        headers: {
            Authorization: (params.token) ? `Bearer ${params.token}` : null
        }
    });
}

const api = {
    USER_LOGIN: params => post('/sign_in', params),
    SUBMIT_BATCH: params => put(`/acu_schedules/${params.member_id}/submit_batch`, params),
    VIEW_SOA: params => get(`/acu_schedules/${params.batch_no}/view_soa`, params)
};

export default api;