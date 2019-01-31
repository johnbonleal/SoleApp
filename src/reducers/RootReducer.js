import { combineReducers } from 'redux';

export default RootReducers = combineReducers({
    user: require('./UserReducer').reducer,
    camera: require('./CameraReducer').reducer
});