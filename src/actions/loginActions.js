import {createRequestTypes} from './actionTypes';

export const LoginTypes = createRequestTypes('LOGIN');

export const requestLogin = params => ({
    type: LoginTypes.LOGIN.REQUEST,
    payload: params
});

export const successLogin = data => ({
    type: LoginTypes.LOGIN.SUCCESS,
    data
});

export const failureLogin = error => ({
    type: LoginTypes.LOGIN.FAILURE,
    error
});

export const logout = () => ({
    type: LoginTypes.LOGOUT
});