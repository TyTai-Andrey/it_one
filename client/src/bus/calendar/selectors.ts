import { RootState } from '@store/index';

export const getCalendarReducer = (store: RootState) => store.calendar;

export const getCalendarList = (store: RootState) =>
  getCalendarReducer(store).list;

export const getCalendarCurrentDay = (store: RootState) =>
  getCalendarReducer(store).currentDay;
