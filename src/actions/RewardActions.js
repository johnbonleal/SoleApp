import { createRequestTypes } from './actionTypes';

export const FetchRewardTypes = createRequestTypes('REWARD');

export const requestFetchRewards = params => ({
    type: FetchRewardTypes.REQUEST,
    params
});

export const successFetchRewards = data => ({
    type: FetchRewardTypes.SUCCESS,
    data
});

export const failureFetchRewards = error => ({
    type: FetchRewardTypes.FAILURE,
    error
});

export const FilterRewardTypes = createRequestTypes('FILTER_REWARD');

export const requestFilterRewards = params => ({
    type: FilterRewardTypes.REQUEST,
    params
});

export const successFilterRewards = data => ({
    type: FilterRewardTypes.SUCCESS,
    data
});

export const failureFilterRewards = error => ({
    type: FilterRewardTypes.FAILURE,
    error
});

export const FetchCategoryTypes = createRequestTypes('FETCH_CATEGORY');

export const requestFetchCategories = params => ({
    type: FetchCategoryTypes.REQUEST,
    params
});

export const successFetchCategories = data => ({
    type: FetchCategoryTypes.SUCCESS,
    data
});

export const failureFetchCategories = error => ({
    type: FetchCategoryTypes.FAILURE,
    error
});

export const RedeemRewardTypes = createRequestTypes('REDEEM_REWARD');

export const requestRedeemRewards = params => ({
    type: RedeemRewardTypes.REQUEST,
    params
});

export const successRedeemRewards = data => ({
    type: RedeemRewardTypes.SUCCESS,
    data
});

export const failureRedeemRewards = error => ({
    type: RedeemRewardTypes.FAILURE,
    error
});

export const FetchMyRewardTypes = createRequestTypes('FETCH_MY_REWARD');

export const requestFetchMyRewards = params => ({
    type: FetchMyRewardTypes.REQUEST,
    params
});

export const successFetchMyRewards = data => ({
    type: FetchMyRewardTypes.SUCCESS,
    data
});

export const failureFetchMyRewards = error => ({
    type: FetchMyRewardTypes.FAILURE,
    error
});