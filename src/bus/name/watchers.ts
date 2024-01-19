// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { nameTypes } from './types';

// Workers
import {
  fetchName,
} from './workers';

function* watchFetchName() {
  yield takeLatest(
    nameTypes.FETCH_NAME_ASYNC,
    fetchName,
  );
}

export function* watchName() {
  yield all([
    call(watchFetchName),
  ]);
}
