import * as types from './map.types';

export const address = (url: string): types.IMap => ({
    type: types.SET_MAP,
    payload: url,
});
