import { call, put } from 'redux-saga/effects';
import * as MerchantActions from '../actions/MerchantActions';
import api from '../services/Api';
import { NavigationService } from '../configs';

export function* fetchAllMerchant(action) {
    try {
        const response = yield call(api.FETCH_MERCHANT, action.params);
        yield put(MerchantActions.successFetchAllMerchant(response.data.data));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch all merchant error: ", error)
        if (error.response) {
            console.log("Fetch all merchant error in response: ", error.response)
        } else if (error.request) {
            console.log("Fetch all merchant error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(MerchantActions.failureFetchAllMerchant(errorMessage));
    }
}

export function* fetchMerchantByPage(action) {
    try {
        const response = yield call(api.FETCH_MERCHANT_BY_PAGE, action.params);
        yield put(MerchantActions.successFetchMerchantByPage(response.data.data));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch merchant by page error: ", error)
        if (error.response) {
            console.log("Fetch merchant by page error in response: ", error.response)
        } else if (error.request) {
            console.log("Fetch merchant by page error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(MerchantActions.failureFetchMerchantByPage(errorMessage));
    }
}

export function* fetchNewMerchant(action) {
    try {
        const response = yield call(api.FETCH_NEW_MERCHANT, action.params);
        console.log("Response Data: ", response.data);
        yield put(MerchantActions.successFetchNewMerchant(response.data.data.data));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch new merchant error: ", error)
        if (error.response) {
            console.log("Fetch new merchant error in response: ", error.response)
        } else if (error.request) {
            console.log("Fetch new merchant error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(MerchantActions.failureFetchNewMerchant(errorMessage));
    }
}

export function* fetchTopDeal(action) {
    try {
        const response = yield call(api.FETCH_TOP_DEAL, action.params);
        console.log("Response Data: ", response.data);
        yield put(MerchantActions.successFetchTopDeal(response.data.data));
    } catch (error) {
        let errorMessage = '';
        console.log("Fetch top deal error: ", error)
        if (error.response) {
            console.log("Fetch top deal error in response: ", error.response)
        } else if (error.request) {
            console.log("Fetch top deal error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(MerchantActions.failureFetchTopDeal(errorMessage));
    }
}

// Watcher Saga
// export default [
//     takeLatest(LoginTypes.REQUEST, handleLogin),
// ];
