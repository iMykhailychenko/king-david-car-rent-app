import { useMemo } from 'react';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { setCheckinDate } from './middleware/setCheckinDate';
import reducers from './reducers';
import { IState } from './rootState';

let store: Store;

const initStore = (state: IState): Store =>
    createStore(reducers, state, composeWithDevTools(applyMiddleware(thunkMiddleware, setCheckinDate)));

export const initializeStore = (initState: IState): Store => {
    let _store: Store = store || initStore(initState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (store) {
        _store = initStore({
            ...store.getState(),
            ...initState,
        });
        // Reset the current store
        store = null;
    }

    // For SSR always create a new store
    if (typeof window === 'undefined') return _store;

    // Create the store once in the client
    store = _store;

    return _store;
};

export const useStore = (initialState: IState): Store => useMemo(() => initializeStore(initialState), [initialState]);
