import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

export default RootReducers = combineReducers({
    auth: require('./AuthReducer').reducer,
    camera: require('./CameraReducer').reducer,
    loan: require('./LoanReducer').reducer,
    form: require('redux-form').reducer
});