import * as types from './success.types';

export const open = (text: string): types.ISuccessAction => ({
    type: types.SUCCESS_OPEN,
    payload: text,
});

export const close = (): types.ISuccessAction => ({
    type: types.SUCCESS_CLOSE,
    payload: null,
});
