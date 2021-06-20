import * as types from './places.types';

export const place = (data: types.IPlace): types.IPlaceAction => ({
    type: types.SET_PLACE,
    payload: data,
});
