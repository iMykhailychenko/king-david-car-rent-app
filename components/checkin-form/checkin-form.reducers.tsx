import * as types from './checkin-form.types';
import { ICheckin } from '../../interfaces/interfaces';

export const form = (
    step: ICheckin = {
        firstName: '',
        lastName: '',
        email: '',
    },
    action: types.ICheckinFromData,
): ICheckin => {
    switch (action.type) {
        case types.CHECKIN_INFORMATION:
            return action.payload;

        default:
            return step;
    }
};
