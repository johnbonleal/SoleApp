import { combineReducers } from 'redux';

export default RootReducers = combineReducers({
    user: require('./userReducer').reducer,
    camera: require('./cameraReducer').reducer
});