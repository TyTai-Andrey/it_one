import { RootState } from '@store/index';

export const getNameReducer = (store: RootState) => store.name;

export const getNameLoading = (store: RootState) =>
  getNameReducer(store).loading;
export const getNameError = (store: RootState) => getNameReducer(store).error;

export const getNameData = (store: RootState) => getNameReducer(store).data;
