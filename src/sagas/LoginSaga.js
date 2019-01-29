import { NavigationActions } from 'react-navigation';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as loginActions from '../actions/LoginActions';
import api from '../services/Api';

function* handleLogin(action) {
    try {
        const response = yield call(api.USER_LOGIN, action.params);
        yield put(loginActions.successLogin(response.data));
        yield put(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'SignedIn' })],
        }));
    } catch (error) {
        let errorMessage = '';
        console.log("Login error: ", error);
        if (error.response) {
            console.log("Login error in response: ", error.response)
        } else if (error.request) {
            console.log("Login error in request: ", error.request);
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(loginActions.failureLogin(errorMessage));
    }
}


// Watcher Saga
export default [
    takeLatest(loginActions.LoginTypes.REQUEST, handleLogin),
];

