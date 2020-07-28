import { ICar } from '../../interfaces/interfaces';
import * as types from './car-card.types';

export const start = (loading: boolean): types.ActionTypes => ({
    type: types.GET_CARS_LIST_START,
    payload: loading,
});

export const success = (cars: ICar[]): types.ActionTypes => ({
    type: types.GET_CARS_LIST_SUCCESS,
    payload: cars,
});

export const error = (error: string): types.ActionTypes => ({
    type: types.GET_CARS_LIST_ERROR,
    payload: error,
});
