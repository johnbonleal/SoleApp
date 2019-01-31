// import { networkEventsListenerSaga } from 'react-native-offline';
import { all, takeLatest } from 'redux-saga/effects';

// ActionTypes
import { LoginTypes } from '../actions/LoginActions';

// Sagas
import { handleLogin } from './LoginSaga';

export function* rootSaga() {
    yield all([
        takeLatest(LoginTypes.REQUEST, handleLogin),
        // fork(networkEventsListenerSaga, { timeout: 8000, checkConnectionInterval: 15000, }),
    ]);
}