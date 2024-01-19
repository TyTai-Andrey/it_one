// Core
import { put, call } from 'redux-saga/effects';

// Actions
import { nameActions } from './actions';

export function* fetchName(action: any) {
  yield put(nameActions.fetchNameRequest());

  const filter = action.payload;
}
