import * as types from './success.types';

export const success = (modal: types.ISuccess = { open: false, text: '' }, action: types.ISuccessAction): types.ISuccess => {
    switch (action.type) {
        case types.SUCCESS_CLOSE:
            return { open: false, text: '' };

        case types.SUCCESS_OPEN:
            return { open: true, text: action.payload };

        default:
            return modal;
    }
};
