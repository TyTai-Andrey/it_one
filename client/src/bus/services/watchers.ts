// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { servicesTypes } from './types';

// Workers
import {
  fetchCurrentService,
  fetchDeleteCurrentService,
  fetchEditCurrentService,
  fetchServices,
} from './workers';

function* watchFetchServices() {
  yield takeLatest(servicesTypes.FETCH_SERVICES_ASYNC, fetchServices);
}

function* watchFetchCurrentService() {
  yield takeLatest(
    servicesTypes.FETCH_CURRENT_SERVICE_ASYNC,
    fetchCurrentService,
  );
}

function* watchFetchDeleteCurrentService() {
  yield takeLatest(
    servicesTypes.FETCH_DELETE_CURRENT_SERVICE_ASYNC,
    fetchDeleteCurrentService,
  );
}

function* watchFetchEditCurrentService() {
  yield takeLatest(
    servicesTypes.FETCH_EDIT_CURRENT_SERVICE_ASYNC,
    fetchEditCurrentService,
  );
}

export function* watchServices() {
  yield all([
    call(watchFetchServices),
    call(watchFetchCurrentService),
    call(watchFetchDeleteCurrentService),
    call(watchFetchEditCurrentService),
  ]);
}
