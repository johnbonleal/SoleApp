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
import {
    FetchRewardTypes,
    FetchCategoryTypes,
    FetchMyRewardTypes
} from '../actions/RewardActions';

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
import {
    fetchRewards,
    fetchCategories,
    fetchMyRewards
} from './RewardSaga';

export function* rootSaga() {
    yield all([
        takeLatest(LoginTypes.REQUEST, handleLogin),
        takeLatest(LoginTypes.RESET, handleLogout),
        takeLatest(FetchAllMerchantTypes.REQUEST, fetchAllMerchant),
        takeLatest(FetchMerchantByPageTypes.REQUEST, fetchMerchantByPage),
        takeLatest(FetchNewMerchantTypes.REQUEST, fetchNewMerchant),
        takeLatest(FetchTopDealTypes.REQUEST, fetchTopDeal),
        takeLatest(FetchNearbyMerchantTypes.REQUEST, fetchNearbyMerchant),
        takeLatest(FetchRewardTypes.REQUEST, fetchRewards),
        takeLatest(FetchCategoryTypes.REQUEST, fetchCategories),
        takeLatest(FetchMyRewardTypes.REQUEST, fetchMyRewards),
        // fork(networkEventsListenerSaga, { timeout: 8000, checkConnectionInterval: 15000, }),
    ]);
}