import * as types from './checkin-form.types';
import { ICheckin } from '../../interfaces/interfaces';

export const formActions = (info: ICheckin): types.ICheckinFromData => ({
    type: types.CHECKIN_INFORMATION,
    payload: info,
});