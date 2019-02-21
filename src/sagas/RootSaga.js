// import { networkEventsListenerSaga } from 'react-native-offline';
import { all, takeLatest } from 'redux-saga/effects';

// ActionTypes
import { LoginTypes } from '../actions/AuthActions';
import {
    FetchAllMerchantTypes,
    FetchMerchantByPageTypes,
    FetchNewMerchantTypes,
    FetchTopDealTypes,
    FetchNearbyMerchantTypes
} from '../actions/MerchantActions';

// Sagas
import {
    handleLogin,
    handleLogout
} from './AuthSaga';
import {
    fetchAllMerchant,
    fetchMerchantByPage,
    fetchNewMerchant,
    fetchTopDeal,
    fetchNearbyMerchant
} from './MerchantSaga';

export function* rootSaga() {
    yield all([
        takeLatest(LoginTypes.REQUEST, handleLogin),
        takeLatest(LoginTypes.RESET, handleLogout),
        takeLatest(FetchAllMerchantTypes.REQUEST, fetchAllMerchant),
        takeLatest(FetchMerchantByPageTypes.REQUEST, fetchMerchantByPage),
        takeLatest(FetchNewMerchantTypes.REQUEST, fetchNewMerchant),
        takeLatest(FetchTopDealTypes.REQUEST, fetchTopDeal),
        takeLatest(FetchNearbyMerchantTypes.REQUEST, fetchNearbyMerchant),
        // fork(networkEventsListenerSaga, { timeout: 8000, checkConnectionInterval: 15000, }),
    ]);
}