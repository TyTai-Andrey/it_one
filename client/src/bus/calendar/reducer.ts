// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { calendarActions } from './actions';

// Typings
import { DayModel } from './interfaces';
import { find, findIndex } from 'lodash';

interface InitialState {
  list: DayModel[] | null;
  currentDay: DayModel | null;
}

const initialState: InitialState = {
  list: [
    {
      id: '03-01-2024',
      value: [{ content: '123', type: 'error', id: 1 }],
    },
  ],
  currentDay: null,
};

export const calendarReducer = createReducer(initialState, (builder) => {
  builder.addCase(calendarActions.setCurrentDay, (state, action) => {
    state.currentDay = action.payload;
  });

  builder.addCase(calendarActions.addDay, (state, action) => {
    if (!state.list) {
      state.list = [action.payload];
      state.currentDay = action.payload;
    }
    if (state.list) {
      const idx = state.list?.findIndex((i) => i.id === action.payload.id);
      if (~idx) {
        state.list = [
          ...state.list.slice(0, idx),
          action.payload,
          ...state.list.slice(idx + 1),
        ];
        state.currentDay = action.payload;
      } else {
        state.list = [...state.list, action.payload];
        state.currentDay = action.payload;
      }
    }
  });

  builder.addCase(calendarActions.removeNotification, (state, action) => {
    const { id, notification } = action.payload;

    if (state.list) {
      const idx = findIndex(state.list, (i) => i.id === id);
      const day = state.list[idx];
      if (day) {
        if (day.value.length > 1) {
          const currentDay = {
            ...day,
            value: day.value.filter((j) => j.id !== notification.id),
          };

          state.list = [
            ...state.list.slice(0, idx),
            currentDay,
            ...state.list.slice(idx + 1),
          ];
          state.currentDay = currentDay;
        } else {
          const list = state.list.filter((i) => i.id !== id);
          state.list = list?.length ? list : null;
          state.currentDay = null;
        }
      }
    }
  });
});
