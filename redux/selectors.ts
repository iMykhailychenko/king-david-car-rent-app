import { IModal } from '../components/modal/modal.types';
import { ICar, IDate } from '../interfaces/interfaces';
import { IState } from './rootState';

// cars data
export const getCarsListSelector = (state: IState): ICar[] => state.cars.list.value;
export const getSingleCarSelector = (state: IState): ICar => state.cars.single.value;

// calendar
export const getCheckinDone = (state: IState): boolean => state.checkin.done;
export const getCheckinFrom = (state: IState): IDate => state.checkin.from;
export const getCheckinTo = (state: IState): IDate => state.checkin.to;

// modal
export const modalSelector = (state: IState): IModal => state.modal;
export const successSelector = (state: IState): IModal => state.success;
