import * as types from './map.types';
import { SET_PLACE, IPlaceAction } from '../places/places.types';

export const address = (url: string = '', action: types.IMap | IPlaceAction): string => {
    switch (action.type) {
        case types.SET_MAP:
            return action.payload;

        case SET_PLACE:
            return action.payload ? action.payload.description : '';

        default:
            return url;
    }
};
