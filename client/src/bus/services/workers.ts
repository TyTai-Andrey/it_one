// Core
import { put, call } from 'redux-saga/effects';

// Actions
import { servicesActions } from './actions';

// Api
import ServicesApi from '@api/ServicesApi';
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchServices() {
  yield put(servicesActions.fetchServicesRequest());

  const { response, error } = yield call(ServicesApi.getServices);
  if (response) {
    yield put(servicesActions.fetchServicesSuccess(response));
  } else if (error) {
    yield put(servicesActions.fetchServicesFailure());
  }
}

export function* fetchCurrentService(action: PayloadAction<string>) {
  yield put(servicesActions.fetchCurrentServiceRequest());

  const { response, error } = yield call(
    ServicesApi.getOneService,
    action.payload,
  );
  if (response) {
    yield put(servicesActions.fetchCurrentServiceSuccess(response));
  } else if (error) {
    yield put(servicesActions.fetchCurrentServiceFailure());
  }
}
