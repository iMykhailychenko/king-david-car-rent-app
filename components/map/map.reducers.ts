import { IPlaceAction, SET_PLACE } from '../places/places.types';
import * as types from './map.types';

export const address = (url = '', action: types.IMap | IPlaceAction): string => {
    switch (action.type) {
        case types.SET_MAP:
            return action.payload;

        case SET_PLACE:
            return action.payload ? action.payload.description : '';

        default:
            return url;
    }
};
