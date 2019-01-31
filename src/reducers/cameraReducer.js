import { SCAN_QR_MODAL_TOGGLE } from '../actions/CameraActions';

const INITIAL_STATE = {
    isScanQrVisible: false
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SCAN_QR_MODAL_TOGGLE:
            return {
                ...state,
                isScanQrVisible: action.payload,
            };
        default:
            return state;
    }
};