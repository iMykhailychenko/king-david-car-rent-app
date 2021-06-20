import { ICar } from '../../interfaces/interfaces';
import * as types from './single-car.types';

export const start = (loading: boolean): types.ActionTypes => ({
    type: types.GET_SINGLE_CAR_START,
    payload: loading,
});

export const success = (car: ICar): types.ActionTypes => ({
    type: types.GET_SINGLE_CAR_SUCCESS,
    payload: car,
});

export const error = (error: string): types.ActionTypes => ({
    type: types.GET_SINGLE_CAR_ERROR,
    payload: error,
});
