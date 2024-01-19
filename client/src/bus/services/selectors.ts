import { RootState } from '@store/index';

export const getServicesReducer = (store: RootState) => store.services;

export const getServicesList = (store: RootState) =>
  getServicesReducer(store).list;

export const getServicesLoading = (store: RootState) =>
  getServicesList(store).loading;
export const getServicesError = (store: RootState) =>
  getServicesList(store).error;
export const getServicesData = (store: RootState) =>
  getServicesList(store).data;

export const getCurrentService = (store: RootState) =>
  getServicesReducer(store).currentService;

export const getCurrentServiceLoading = (store: RootState) =>
  getCurrentService(store).loading;
export const getCurrentServiceError = (store: RootState) =>
  getCurrentService(store).error;
export const getCurrentServiceData = (store: RootState) =>
  getCurrentService(store).data;
