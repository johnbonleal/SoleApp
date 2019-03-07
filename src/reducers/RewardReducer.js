import {
    FetchRewardTypes,
    FilterRewardTypes,
    FetchCategoryTypes,
    RedeemRewardTypes,
    FetchMyRewardTypes
} from '../actions/RewardActions';

const INITIAL_STATE = {
    isFetching: false,
    isFetchingCategories: false,
    isRedeemingReward: false,
    isFetchingMyRewards: false,
    isRedirected: false,
    rewardsList: [],
    rewardsListFiltered: {},
    categoriesList: [],
    redeem: {},
    myRewards: [],
    currentReward: {},
    isSuccess: false,
    hasError: false,
    errorMessage: ''
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchRewardTypes.REQUEST:
            return {
                ...state,
                isFetching: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchRewardTypes.SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                rewardsList: action.data,
            };
        case FetchRewardTypes.FAILURE:
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FilterRewardTypes.REQUEST:
            return {
                ...state,
                isFetching: true,
                isSuccess: false,
                hasError: false,
            };
        case FilterRewardTypes.SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                rewardsListFiltered: action.data,
            };
        case FilterRewardTypes.FAILURE:
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchCategoryTypes.REQUEST:
            return {
                ...state,
                isFetchingCategories: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchCategoryTypes.SUCCESS:
            return {
                ...state,
                isFetchingCategories: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                categoriesList: action.data,
            };
        case FetchCategoryTypes.FAILURE:
            return {
                ...state,
                isFetchingCategories: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case RedeemRewardTypes.REQUEST:
            return {
                ...state,
                isRedeemingReward: true,
                isSuccess: false,
                hasError: false,
            };
        case RedeemRewardTypes.SUCCESS:
            return {
                ...state,
                isRedeemingReward: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                redeem: action.data,
            };
        case RedeemRewardTypes.FAILURE:
            return {
                ...state,
                isRedeemingReward: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        case FetchMyRewardTypes.REQUEST:
            return {
                ...state,
                isFetchingMyRewards: true,
                isSuccess: false,
                hasError: false,
            };
        case FetchMyRewardTypes.SUCCESS:
            return {
                ...state,
                isFetchingMyRewards: false,
                isSuccess: true,
                hasError: false,
                errorMessage: '',
                myRewards: action.data,
            };
        case FetchMyRewardTypes.FAILURE:
            return {
                ...state,
                isFetchingMyRewards: false,
                isSuccess: false,
                hasError: true,
                errorMessage: action.error,
            };
        default:
            return state;
    }
};