import { IDate } from '../../interfaces/interfaces';

export const CHECKIN_DATE_FROM = 'CHECKIN_DATE_FROM';
export const CHECKIN_DATE_TO = 'CHECKIN_DATE_TO';
export const CHECKIN_DONE = 'CHECKIN_DONE';

interface ICheckinDateFrom {
    type: typeof CHECKIN_DATE_FROM;
    payload: IDate;
}
interface ICheckinDateTo {
    type: typeof CHECKIN_DATE_TO;
    payload: IDate;
}
interface ICheckinDone {
    type: typeof CHECKIN_DONE;
    payload: boolean;
}

export type ActionTypes = ICheckinDateFrom | ICheckinDateTo | ICheckinDone;
