import {
    FetchAllMerchantTypes,
    FetchNewMerchantTypes,
    FetchMerchantByPageTypes,
    FetchTopDealTypes,
    FetchNearbyMerchantTypes
} from '../actions/MerchantActions';

const INITIAL_STATE = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    errorMessage: '',
    allMerchants: [],
    newMerchants: [],
    merchantsByPage: [],
    topDeals: [],
    nearbyMerchants: []
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchAllMerchantTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchAllMerchantTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                allMerchants: action.data,
            };
        case FetchAllMerchantTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchNewMerchantTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchNewMerchantTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                newMerchants: action.data,
            };
        case FetchNewMerchantTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchMerchantByPageTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchMerchantByPageTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                merchantsByPage: action.data,
            };
        case FetchMerchantByPageTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchTopDealTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchTopDealTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                topDeals: action.data,
            };
        case FetchTopDealTypes.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchNearbyMerchantTypes.REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchNearbyMerchantTypes.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                nearbyMerchants: action.data,
            };
        case FetchNearbyMerchantTypes.FAILURE:
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