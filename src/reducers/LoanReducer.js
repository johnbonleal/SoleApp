import { LoanTypes } from '../actions/LoanActions';

const INITIAL_STATE = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    errorMessage: '',
    isOnBoardingDismissed: false,
    data: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ONBOARDING_DISMISS':
            return {
                ...state,
                isOnBoardingDismissed: action.payload
            }
        case LoanTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case LoanTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                data: action.data,
            };
        case LoanTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        default:
            return state;
    }
};