import * as types from './stepper.types';

export const activeStep = (step = 0, action: types.ISetRentStep): number => {
    switch (action.type) {
        case types.SET_RENT_STEP:
            return action.payload;

        default:
            return step;
    }
};
