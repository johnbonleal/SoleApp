import { call, put } from 'redux-saga/effects';
import * as LoginActions from '../actions/LoginActions';
import api from '../services/Api';
import { NavigationService } from '../configs';

export function* handleLogin(action) {
    try {
        const response = yield call(api.USER_LOGIN, action.params);
        yield put(LoginActions.successLogin(response.data));
        yield (NavigationService.navigate('AppDrawer'));
    } catch (error) {
        let errorMessage = '';
        console.log("Login error: ", error)
        if (error.response) {
            console.log("Login error in response: ", error.response)
            const { message } = error.response.data;
            switch (message) {
                case 'User not found':
                case 'Wrong username and password':
                    errorMessage = 'The username or password you have entered is invalid';
                    break;
                case 'The Member you have entered is not Active':
                    errorMessage = 'The member you have entered is not active';
                    break;
                default:
                    errorMessage = message ? message : 'Something went wrong. Please try again later.';
                    break;
            }
        } else if (error.request) {
            console.log("Login error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(LoginActions.failureLogin(errorMessage));
    }
}

// Watcher Saga
// export default [
//     takeLatest(LoginTypes.REQUEST, handleLogin),
// ];
