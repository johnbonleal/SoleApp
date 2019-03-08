import { LoginTypes } from '../actions/AuthActions';

const INITIAL_STATE = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    errorMessage: '',
    data: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case LoginTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                data: action.data,
            };
        case LoginTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case LoginTypes.RESET:
            return state;
        default:
            return state;
    }
};