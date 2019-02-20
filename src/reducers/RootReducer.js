import { combineReducers } from 'redux';

export default RootReducers = combineReducers({
    auth: require('./AuthReducer').reducer,
    camera: require('./CameraReducer').reducer,
    loan: require('./LoanReducer').reducer,
    merchant: require('./MerchantReducer').reducer,
    form: require('redux-form').reducer
});