import {createRequestTypes} from './actionTypes';

export const LoanTypes = createRequestTypes('LOAN');

export const dismissOnBoarding = payload => ({
    type: 'ONBOARDING_DISMISS',
    payload
});

export const requestLogin = payload => ({
    type: LoginTypes.LOGIN.REQUEST,
    payload
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