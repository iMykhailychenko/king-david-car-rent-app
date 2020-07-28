import * as types from './modal.types';

export const modal = (modal: types.IModal = { open: false, text: '' }, action: types.IModalAction): types.IModal => {
    switch (action.type) {
        case types.MODAL_CLOSE:
            return { open: false, text: '' };

        case types.MODAL_OPEN:
            return { open: true, text: action.payload };

        default:
            return modal;
    }
};
