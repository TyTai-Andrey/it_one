// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { calendarTypes } from './types';

import { DayModel } from './interfaces';

export const calendarActions = {
  setCurrentDay: createAction(
    calendarTypes.SET_CURRENT_DAY,
    (data: DayModel | null) => ({ payload: data }),
  ),

  addDay: createAction(calendarTypes.ADD_DAY, (data: DayModel) => ({
    payload: data,
  })),
  removeNotification: createAction(
    calendarTypes.REMOVE_NOTIFICATION,
    (data: { id: string; notification: DayModel['value'][0] }) => ({
      payload: data,
    }),
  ),
};
