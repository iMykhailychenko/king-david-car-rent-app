import { ICheckin } from '../../interfaces/interfaces';

export const CHECKIN_INFORMATION = 'CHECKIN_INFORMATION';

export interface ICheckinFromData {
    type: typeof CHECKIN_INFORMATION;
    payload: ICheckin;
}
