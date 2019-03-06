import { call, put } from 'redux-saga/effects';
import * as LoginActions from '../actions/AuthActions';
import api from '../services/Api';
import { NavigationService } from '../configs';

export function* handleLogin(action) {
    try {
        const response = yield call(api.USER_LOGIN, action.params);
        yield put(LoginActions.successLogin(response.data));
        if (response.data.status === 200) {
            yield (NavigationService.navigate('Main'));
        } else if (response.data.user.pin.length < 6) {
            yield (NavigationService.navigate('ChangePin'));
        } else if (
            response.data.user.first_name === null ||
            (response.data.user.contact_number === null || response.data.user.contact_number === '') ||
            response.data.user.email === null
        ) {
            yield (NavigationService.navigate('CreateProfile'));
        } else {

        }
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
            errorMessage = "Connection timed out. Please check your network.";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
        yield put(LoginActions.failureLogin(errorMessage));
    }
}

export function* handleLogout(action) {
    try {
        console.log("Logout action: ", action);
        yield call(api.USER_LOGOUT, action.params);
        yield (NavigationService.navigate('Login'));
    } catch (error) {
        let errorMessage = '';
        console.log("Logout error: ", error);
        if (error.response) {
            console.log("Logout error in response: ", error.response)
        } else if (error.request) {
            console.log("Logout error in request: ", error.request)
            errorMessage = "Request Error";
        } else {
            errorMessage = 'Something went wrong. Please try again later.';
        }
    }
}

// Watcher Saga
// export default [
//     takeLatest(LoginTypes.REQUEST, handleLogin),
// ];
