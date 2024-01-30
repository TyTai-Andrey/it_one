// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { calendarActions } from './actions';

// Typings
import { DayModel } from './interfaces';
import { findIndex } from 'lodash';
import { storageService } from '@utils/storageService';

const calendarStorageService = storageService('calendar');

interface InitialState {
  list: DayModel[] | null;
  currentDay: DayModel | null;
}

const initialState: InitialState = {
  list: calendarStorageService.get('list', []),
  currentDay: null,
};

export const calendarReducer = createReducer(initialState, (builder) => {
  builder.addCase(calendarActions.setCurrentDay, (state, action) => {
    state.currentDay = action.payload;
  });

  builder.addCase(calendarActions.addDay, (state, action) => {
    let list: any = [];
    if (!state.list) {
      list = [action.payload];
      state.list = [action.payload];
      state.currentDay = action.payload;
    }
    if (state.list) {
      const idx = state.list?.findIndex((i) => i.id === action.payload.id);
      if (~idx) {
        list = [
          ...state.list.slice(0, idx),
          action.payload,
          ...state.list.slice(idx + 1),
        ];
        state.list = list;
        state.currentDay = action.payload;
      } else {
        list = [...state.list, action.payload];
        state.list = list;
        state.currentDay = action.payload;
      }
    }
    calendarStorageService.set('list', list);
  });

  builder.addCase(calendarActions.removeNotification, (state, action) => {
    const { id, notification } = action.payload;

    if (state.list) {
      const idx = findIndex(state.list, (i) => i.id === id);
      const day = state.list[idx];
      let list: any = [];
      if (day) {
        if (day.value.length > 1) {
          const currentDay = {
            ...day,
            value: day.value.filter((j) => j.id !== notification.id),
          };
          list = [
            ...state.list.slice(0, idx),
            currentDay,
            ...state.list.slice(idx + 1),
          ];
          state.list = list;
          state.currentDay = currentDay;
        } else {
          const newList = state.list.filter((i) => i.id !== id);
          list = newList?.length ? newList : null;
          state.list = list;
          state.currentDay = null;
        }
        calendarStorageService.set('list', list);
      }
    }
  });
});
