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

const get = (url, params) => axios.get(url, params);
const post = (url, params) => axios.post(url, params);
const put = (url, params) => axios.put(url, customParams);

const api = {
    USER_LOGIN: params => post('/users/login', params),
    // SUBMIT_BATCH: params => put(`/acu_schedules/${params.member_id}/submit_batch`, params),
    // VIEW_SOA: params => get(`/acu_schedules/${params.batch_no}/view_soa`, params)
};

export default api;