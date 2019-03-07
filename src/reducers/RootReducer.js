import { combineReducers } from 'redux';

const RootReducer = {
    auth: require('./AuthReducer').reducer,
    camera: require('./CameraReducer').reducer,
    loan: require('./LoanReducer').reducer,
    merchant: require('./MerchantReducer').reducer,
    reward: require('./RewardReducer').reducer,
    form: require('redux-form').reducer
};

export default RootReducer;