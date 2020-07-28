import { combineReducers } from 'redux';
import * as types from './single-car.types';
import { ICar } from '../../interfaces/interfaces';
import { carInit } from '../../redux/rootState';

const loading = (loading: boolean = false, action: types.ActionTypes): boolean => {
    switch (action.type) {
        case types.GET_SINGLE_CAR_START:
            return true;

        case types.GET_SINGLE_CAR_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const value = (items: ICar = carInit, action: types.ActionTypes): ICar => {
    switch (action.type) {
        case types.GET_SINGLE_CAR_SUCCESS:
            return action.payload;

        default:
            return items;
    }
};

const error = (error: string = '', action: types.ActionTypes): string => {
    switch (action.type) {
        case types.GET_SINGLE_CAR_START:
        case types.GET_SINGLE_CAR_SUCCESS:
            return '';

        case types.GET_SINGLE_CAR_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const singleCarReducer = combineReducers({
    loading,
    value,
    error,
});
