import { Middleware, Store } from 'redux';

import * as types from '../../components/checkin-date/checkin-date.types';
import { createCustomDateObj, createEndDateObj, createInitDateObj, isCorrectEnd, isCorrectStart } from '../../helpers/dateUtils';
import { IState } from '../rootState';

interface Dispatch<S> {
    <A extends S>(action: A): A;
}

export const setCheckinDate: Middleware =
    (store: Store<IState>) => (next: Dispatch<types.ActionTypes>) => (action: types.ActionTypes) => {
        switch (action.type) {
            case types.CHECKIN_DATE_FROM: {
                // Checks if rent starts earlier than after 2 hours from current time
                if (!isCorrectStart(action.payload, 2)) {
                    next({ type: action.type, payload: createCustomDateObj(createInitDateObj(2)) });
                    break;
                }

                next(action);
                break;
            }

            case types.CHECKIN_DATE_TO: {
                // Checks if rent end earlier than after 4 hours from start time
                if (!isCorrectEnd(store.getState().checkin.from, action.payload, 4)) {
                    next({ type: action.type, payload: createEndDateObj(store.getState().checkin.from, 4) });
                    break;
                }

                next(action);
                break;
            }

            default: {
                next(action);
            }
        }
    };
