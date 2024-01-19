// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { nameReducer } from './name/reducer';

// Watchers
import { watchName } from './name/watchers';

export const rootReducer = () =>
  combineReducers({
    name: nameReducer,
  });

export function* rootSaga() {
  yield all([
    call(watchName)
  ]);
}
