import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { checkin } from '../components/checkin-date/checkin-date.reducers';
import { carsListReducer } from '../components/car-card/car-card.reducers';
import { singleCarReducer } from '../components/single-car/single-car.reducers';
import { activeStep } from '../components/stepper/stepper.reducers';
import { form } from '../components/checkin-form/checkin-form.reducers';
import { modal } from '../components/modal/modal.reducers';
import { success } from '../components/success/success.reducers';
import { loading } from '../components/loader/loader.reducers';
import { place } from '../components/places/places.reducers';
import { address } from '../components/map/map.reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['form', 'activeStep', 'place'],
}

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
