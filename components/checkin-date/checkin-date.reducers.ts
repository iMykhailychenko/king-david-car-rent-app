import { combineReducers } from 'redux';

import { createCustomDateObj, createEndDateObj, createInitDateObj, isCorrectEnd, isCorrectStart } from '../../helpers/dateUtils';
import { IDate } from '../../interfaces/interfaces';
import * as types from './checkin-date.types';

// 2 - Checkin can be only in the next 2 hours (from current time and not sooner)
const from = (fromDate: IDate = createCustomDateObj(createInitDateObj(2)), action: types.ActionTypes): IDate => {
    switch (action.type) {
        case types.CHECKIN_DATE_TO:
            if (!isCorrectStart(action.payload, 2)) return createEndDateObj(action.payload, 4);
            // if (!isCorrectEnd(fromDate, action.payload, 4)) return createEndDateObj(action.payload, 4);
            return fromDate;

        case types.CHECKIN_DATE_FROM:
            return action.payload;

        default:
            return fromDate;
    }
};

// 6 - The total time of booking must be more than 4 hours (2 + 4 = 6)
const to = (toDate: IDate = createCustomDateObj(createInitDateObj(6)), action: types.ActionTypes): IDate => {
    switch (action.type) {
        case types.CHECKIN_DATE_FROM:
            if (!isCorrectEnd(action.payload, toDate, 4)) return createEndDateObj(action.payload, 4);
            return toDate;

        case types.CHECKIN_DATE_TO:
            return action.payload;

        default:
            return toDate;
    }
};

const done = (done = false, action: types.ActionTypes): boolean => {
    switch (action.type) {
        case types.CHECKIN_DONE:
            return action.payload;

        default:
            return done;
    }
};

export const checkin = combineReducers({
    from,
    to,
    done,
});
