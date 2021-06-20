import { ICar } from '../../interfaces/interfaces';
/*
 * GET CARS LIST
 */
export const GET_CARS_LIST_START = 'GET_CARS_LIST_START';
export const GET_CARS_LIST_SUCCESS = 'GET_CARS_LIST_SUCCESS';
export const GET_CARS_LIST_ERROR = 'GET_CARS_LIST_ERROR';

// get users list action types
interface IGetCartsStart {
    type: typeof GET_CARS_LIST_START;
    payload: boolean;
}
interface IGetCartsSuccess {
    type: typeof GET_CARS_LIST_SUCCESS;
    payload: ICar[];
}
interface IGetCartsError {
    type: typeof GET_CARS_LIST_ERROR;
    payload: string;
}

export type ActionTypes = IGetCartsStart | IGetCartsSuccess | IGetCartsError;
