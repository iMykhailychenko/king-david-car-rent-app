import { ICheckin } from '../../interfaces/interfaces';
import * as types from './checkin-form.types';

export const formActions = (info: ICheckin): types.ICheckinFromData => ({
    type: types.CHECKIN_INFORMATION,
    payload: info,
});
