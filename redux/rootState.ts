import { ICar, IDate } from '../interfaces/interfaces';
import { createInitDateObj, createCustomDateObj } from '../helpers/dateUtils';
import { IModal } from '../components/modal/modal.types';
import { IPlace, initPlace } from '../components/places/places.types';

export interface IState {
    checkin: {
        from: IDate;
        to: IDate;
        done: boolean;
    };
    form: {
        firstName: string;
        lastName: string;
        email: string;
    }
    cars: {
        list: {
            loading: boolean;
            value: ICar[];
            error: string;
        };
        single: {
            loading: boolean;
            value: ICar;
            error: string;
        };
    };
    activeStep: number;
    loading?: boolean;
    modal: IModal;
    success: IModal;
    place: IPlace;
    address: string;
}

// cars
export const carInit: ICar = {
    id: 0,
    title: '',
    img: '',
    text: '',
    price: 0,
    rating: {
        value: 0,
        text: '',
    },
};

// init state for SSR
export const initialState: IState = {
    checkin: {
        // 2 - Checkin can be only in the next 2 hours (from current time and not sooner)
        from: createCustomDateObj(createInitDateObj(2)),
        // 6 - The total time of booking must be more than 4 hours (2 + 4 = 6)
        to: createCustomDateObj(createInitDateObj(6)),
        done: false,
    },
    form: {
        firstName: '',
        lastName: '',
        email: '',
    },
    modal: {
        open: false,
        text: '',
    },
    success: {
        open: false,
        text: '',
    },
    cars: {
        list: {
            loading: false,
            value: [carInit],
            error: '',
        },
        single: {
            loading: false,
            value: carInit,
            error: '',
        },
    },
    activeStep: 0,
    place: initPlace,
    address: '',
};
