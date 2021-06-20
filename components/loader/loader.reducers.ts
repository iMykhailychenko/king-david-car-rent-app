import * as types from './loader.types';

export const loading = (show = false, action: types.ILoading): boolean => {
    switch (action.type) {
        case types.LOADING_START:
        case types.LOADING_END:
            return action.payload;

        default:
            return show;
    }
};
