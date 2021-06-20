import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carsListReducer } from '../components/car-card/car-card.reducers';
import { checkin } from '../components/checkin-date/checkin-date.reducers';
import { form } from '../components/checkin-form/checkin-form.reducers';
import { loading } from '../components/loader/loader.reducers';
import { address } from '../components/map/map.reducers';
import { modal } from '../components/modal/modal.reducers';
import { place } from '../components/places/places.reducers';
import { singleCarReducer } from '../components/single-car/single-car.reducers';
import { activeStep } from '../components/stepper/stepper.reducers';
import { success } from '../components/success/success.reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['form', 'activeStep', 'place'],
};

const cars = combineReducers({
    list: carsListReducer,
    single: singleCarReducer,
});

const rootReducer = combineReducers({
    checkin,
    cars,
    form,
    modal,
    success,
    place,
    loading,
    activeStep,
    address,
});

export default persistReducer(persistConfig, rootReducer);
