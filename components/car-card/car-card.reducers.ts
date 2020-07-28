import { combineReducers } from 'redux';
import * as types from './car-card.types';
import { ICar } from '../../interfaces/interfaces';

const loading = (loading: boolean = false, action: types.ActionTypes): boolean => {
    switch (action.type) {
        case types.GET_CARS_LIST_START:
            return true;

        case types.GET_CARS_LIST_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const value = (items: ICar[] = [], action: types.ActionTypes): ICar[] => {
    switch (action.type) {
        case types.GET_CARS_LIST_SUCCESS:
            return action.payload;

        default:
            return items;
    }
};

const error = (error: string = '', action: types.ActionTypes): string => {
    switch (action.type) {
        case types.GET_CARS_LIST_START:
        case types.GET_CARS_LIST_SUCCESS:
            return '';

        case types.GET_CARS_LIST_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const carsListReducer = combineReducers({
    loading,
    value,
    error,
});
