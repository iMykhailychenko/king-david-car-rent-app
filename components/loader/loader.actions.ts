import * as types from './loader.types';

export const start = (): types.ILoading => ({
    type: types.LOADING_START,
    payload: true,
});

export const end = (): types.ILoading => ({
    type: types.LOADING_END,
    payload: false,
});
