import { createRequestTypes } from './actionTypes';

export const FetchAllMerchantTypes = createRequestTypes('ALL_MERCHANT');

export const requestFetchAllMerchant = params => ({
    type: FetchAllMerchantTypes.REQUEST,
    params
});

export const successFetchAllMerchant = data => ({
    type: FetchAllMerchantTypes.SUCCESS,
    data
});

export const failureFetchAllMerchant = error => ({
    type: FetchAllMerchantTypes.FAILURE,
    error
});

export const FetchMerchantByPageTypes = createRequestTypes('MERCHANT_BY_PAGE');

export const requestFetchMerchantByPage = params => ({
    type: FetchMerchantByPageTypes.REQUEST,
    params
});

export const successFetchMerchantByPage = data => ({
    type: FetchMerchantByPageTypes.SUCCESS,
    data
});

export const failureFetchMerchantByPage = error => ({
    type: FetchMerchantByPageTypes.FAILURE,
    error
});

export const FetchNewMerchantTypes = createRequestTypes('NEW_MERCHANT');

export const requestFetchNewMerchant = params => ({
    type: FetchNewMerchantTypes.REQUEST,
    params
});

export const successFetchNewMerchant = data => ({
    type: FetchNewMerchantTypes.SUCCESS,
    data
});

export const failureFetchNewMerchant = error => ({
    type: FetchNewMerchantTypes.FAILURE,
    error
});

export const FetchTopDealTypes = createRequestTypes('TOP_DEAL');

export const requestFetchTopDeal = params => ({
    type: FetchTopDealTypes.REQUEST,
    params
});

export const successFetchTopDeal = data => ({
    type: FetchTopDealTypes.SUCCESS,
    data
});

export const failureFetchTopDeal = error => ({
    type: FetchTopDealTypes.FAILURE,
    error
});