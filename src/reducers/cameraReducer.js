import { CAMERA_TOGGLE } from '../actions/CameraActions';

const INITIAL_STATE = {
    isCameraOn: false
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CAMERA_TOGGLE:
            return {
                ...state,
                isCameraOn: action.payload,
            };
        default:
            return state;
    }
};