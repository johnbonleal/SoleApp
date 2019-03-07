import { call, put } from 'redux-saga/effects';
import * as RewardActions from '../actions/RewardActions';
import api from '../services/Api';
import { NavigationService } from '../configs';

export function* fetchRewards(action) {
    try {
        const response = yield call(api.FETCH_REWARD, action.params);
        yield put(RewardActions.successFetchRewards(response.data.data.products));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch rewards error: ", error)
        if (error.response) {
            console.log("Fetch rewards error in response: ", error.response);
        } else if (error.request) {
            console.log("Fetch rewards error in request: ", error.request);
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(RewardActions.failureFetchRewards(errorMessage));
    }
}

export function* fetchCategories(action) {
    try {
        const response = yield call(api.FETCH_CATEGORY, action.params);
        yield put(RewardActions.successFetchCategories(response.data.data.merchant_categories));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch categories error: ", error)
        if (error.response) {
            console.log("Fetch categories error in response: ", error.response);
        } else if (error.request) {
            console.log("Fetch categories error in request: ", error.request);
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(RewardActions.failureFetchCategories(errorMessage));
    }
}

export function* fetchMyRewards(action) {
    try {
        const response = yield call(api.FETCH_MY_REWARD, action.params);
        yield put(RewardActions.successFetchMyRewards(response.data.data.products));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch my rewards error: ", error)
        if (error.response) {
            console.log("Fetch my rewards error in response: ", error.response);
        } else if (error.request) {
            console.log("Fetch my rewards error in request: ", error.request);
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(RewardActions.failureFetchMyRewards(errorMessage));
    }
}