import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant(), createLogger())
    );
}