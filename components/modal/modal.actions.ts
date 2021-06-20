import * as types from './modal.types';

export const open = (text: string): types.IModalAction => ({
    type: types.MODAL_OPEN,
    payload: text,
});

export const close = (): types.IModalAction => ({
    type: types.MODAL_CLOSE,
    payload: null,
});
