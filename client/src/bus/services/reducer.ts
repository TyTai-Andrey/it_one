// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { servicesActions } from './actions';

// Typings
import { ServiceModel } from './interfaces';

interface InitialState {
  list: {
    data: ServiceModel[] | null;
    loading: boolean;
    error: boolean;
  };
  currentService: {
    data: ServiceModel | null;
    loading: boolean;
    error: boolean;
  };
}

const initialState: InitialState = {
  list: {
    data: null,
    loading: true,
    error: false,
  },
  currentService: {
    data: null,
    loading: true,
    error: false,
  },
};

export const servicesReducer = createReducer(initialState, (builder) => {
  builder.addCase(servicesActions.fetchServicesRequest, (state) => {
    state.list.loading = true;
    state.list.error = false;
  });
  builder.addCase(servicesActions.fetchServicesSuccess, (state, action) => {
    state.list.data = action.payload;
    state.list.loading = false;
    state.list.error = false;
  });
  builder.addCase(servicesActions.fetchServicesFailure, (state) => {
    state.list.data = null;
    state.list.loading = false;
    state.list.error = true;
  });

  builder.addCase(servicesActions.fetchCurrentServiceRequest, (state) => {
    state.currentService.loading = true;
    state.currentService.error = false;
  });
  builder.addCase(
    servicesActions.fetchCurrentServiceSuccess,
    (state, action) => {
      state.currentService.data = action.payload;
      state.currentService.loading = false;
      state.currentService.error = false;
    },
  );
  builder.addCase(servicesActions.fetchCurrentServiceFailure, (state) => {
    state.currentService.data = null;
    state.currentService.loading = false;
    state.currentService.error = true;
  });
});
