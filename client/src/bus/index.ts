// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { servicesReducer } from './services/reducer';

// Watchers
import { watchServices } from './services/watchers';

export const rootReducer = () =>
  combineReducers({
    services: servicesReducer,
  });

export function* rootSaga() {
  yield all([call(watchServices)]);
}
