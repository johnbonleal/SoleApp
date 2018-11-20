// import { networkEventsListenerSaga } from 'react-native-offline';

// ActionTypes
import LoginActionTypes from '../actions/loginActions';

// Sagas
import { handleLogin } from './LoginSaga';


export function* rootSaga() {
    yield all([
        takeLatest(LoginActionTypes.REQUEST, handleLogin),
        // fork(networkEventsListenerSaga, { timeout: 8000, checkConnectionInterval: 15000, }),
    ]);
}