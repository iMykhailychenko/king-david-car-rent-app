import * as types from './stepper.types';

export const setRentStep = (activeStep: number): types.ISetRentStep => ({
    type: types.SET_RENT_STEP,
    payload: activeStep,
});
