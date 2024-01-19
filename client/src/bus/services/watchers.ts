// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { servicesTypes } from './types';

// Workers
import { fetchCurrentService, fetchServices } from './workers';

function* watchFetchServices() {
  yield takeLatest(servicesTypes.FETCH_SERVICES_ASYNC, fetchServices);
}

function* watchFetchCurrentService() {
  yield takeLatest(
    servicesTypes.FETCH_CURRENT_SERVICE_ASYNC,
    fetchCurrentService,
  );
}

export function* watchServices() {
  yield all([call(watchFetchServices), call(watchFetchCurrentService)]);
}
