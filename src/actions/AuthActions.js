import { createRequestTypes } from './actionTypes';

export const LoginTypes = createRequestTypes('LOGIN');

export const requestLogin = params => ({
    type: LoginTypes.REQUEST,
    params
});

export const successLogin = data => ({
    type: LoginTypes.SUCCESS,
    data
});

export const failureLogin = error => ({
    type: LoginTypes.FAILURE,
    error
});

export const logout = params => ({
    type: LoginTypes.RESET,
    params
});