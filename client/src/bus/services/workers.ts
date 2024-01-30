// Core
import { put, call } from 'redux-saga/effects';

// Actions
import { servicesActions } from './actions';

// Api
import ServicesApi from '@api/ServicesApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { ServiceModel, WithHandlers } from './interfaces';

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

export function* fetchDeleteCurrentService(
  action: PayloadAction<WithHandlers<{ id: string }>>,
) {
  yield put(servicesActions.fetchCurrentServiceRequest());
  const { response, error } = yield call(
    ServicesApi.deleteService,
    action.payload.id,
  );
  if (response) {
    action.payload.onSuccess?.();
  } else if (error) {
    yield put(servicesActions.fetchCurrentServiceFailure());
    action.payload.onError?.();
  }
}

export function* fetchEditCurrentService(
  action: PayloadAction<WithHandlers<{ body: ServiceModel }>>,
) {
  yield put(servicesActions.fetchCurrentServiceRequest());

  const { response, error } = yield call(
    ServicesApi.editService,
    action.payload.body,
  );
  if (response) {
    yield put(servicesActions.fetchCurrentServiceSuccess(action.payload.body));
    action.payload.onSuccess?.(action.payload.body);
  } else if (error) {
    yield put(servicesActions.fetchCurrentServiceFailure());
  }
}
