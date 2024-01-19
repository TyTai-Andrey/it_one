// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { nameTypes } from './types';

export const nameActions = {
  // Sync
  fetchNameRequest: createAction(nameTypes.FETCH_NAME_REQUEST),
};
