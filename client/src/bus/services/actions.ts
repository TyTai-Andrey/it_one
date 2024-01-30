// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { servicesTypes } from './types';

import { ServiceModel, WithHandlers } from './interfaces';

// bus/index.ts
// services: servicesReducer,
// call(watchServices),

//Component Services
// servicesActions
// servicesShapes

// getServicesLoading
// getServicesError

// getServicesData
// getServicesResult
// getServicesTotal

export const servicesActions = {
  // Sync
  fetchServicesRequest: createAction(servicesTypes.FETCH_SERVICES_REQUEST),
  fetchServicesSuccess: createAction(
    servicesTypes.FETCH_SERVICES_SUCCESS,
    (data: ServiceModel[]) => ({ payload: data }),
  ),
  fetchServicesFailure: createAction(servicesTypes.FETCH_SERVICES_FAILURE),

  fetchCurrentServiceRequest: createAction(
    servicesTypes.FETCH_CURRENT_SERVICE_REQUEST,
  ),
  fetchCurrentServiceSuccess: createAction(
    servicesTypes.FETCH_CURRENT_SERVICE_SUCCESS,
    (data: ServiceModel) => ({ payload: data }),
  ),
  fetchCurrentServiceFailure: createAction(
    servicesTypes.FETCH_CURRENT_SERVICE_FAILURE,
  ),

  // Async
  fetchServicesAsync: createAction(servicesTypes.FETCH_SERVICES_ASYNC),
  fetchCurrentServiceAsync: createAction(
    servicesTypes.FETCH_CURRENT_SERVICE_ASYNC,
    (id: string) => ({ payload: id }),
  ),
  fetchDeleteCurrentServiceAsync: createAction(
    servicesTypes.FETCH_DELETE_CURRENT_SERVICE_ASYNC,
    (payload: WithHandlers<{ id: string }>) => ({
      payload,
    }),
  ),

  fetchEditCurrentServiceAsync: createAction(
    servicesTypes.FETCH_EDIT_CURRENT_SERVICE_ASYNC,
    (payload: WithHandlers<{ body: ServiceModel }>) => ({
      payload,
    }),
  ),
};
