import { ICar } from '../../interfaces/interfaces';

/*
 * GET SINGLE CAR
 */
export const GET_SINGLE_CAR_START = 'GET_SINGLE_CAR_START';
export const GET_SINGLE_CAR_SUCCESS = 'GET_SINGLE_CAR_SUCCESS';
export const GET_SINGLE_CAR_ERROR = 'GET_SINGLE_CAR_ERROR';
// get users list action types
interface IGetSingleCartStart {
    type: typeof GET_SINGLE_CAR_START;
    payload: boolean;
}
interface IGetSingleCartSuccess {
    type: typeof GET_SINGLE_CAR_SUCCESS;
    payload: ICar;
}
interface IGetSingleCartError {
    type: typeof GET_SINGLE_CAR_ERROR;
    payload: string;
}

export type ActionTypes = IGetSingleCartStart | IGetSingleCartSuccess | IGetSingleCartError;
