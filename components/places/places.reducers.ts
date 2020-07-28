import * as types from './places.types';

export const place = (data: types.IPlace = types.initPlace, action: types.IPlaceAction): types.IPlace => {
    switch (action.type) {
        case types.SET_PLACE:
            return action.payload;

        default:
            return data;
    }
};
