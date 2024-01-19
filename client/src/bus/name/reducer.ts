// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { nameActions } from './actions';

// Typings
import { NameItemModel } from './interfaces';

interface InitialState {
  data: NameItemModel[] | null;
  loading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  data: null,
  loading: true,
  error: false,
};

export const nameReducer = createReducer(initialState, (builder) => {
  builder.addCase(nameActions.fetchNameRequest, (state) => {
    state.loading = true;
    state.error = false;
  });
});
