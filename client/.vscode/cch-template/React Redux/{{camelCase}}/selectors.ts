import { RootState } from '@store/index';

export const get{{pascalCase}}Reducer = (store: RootState) =>
  store.{{camelCase}};

export const get{{pascalCase}} = (store: RootState) => get{{pascalCase}}Reducer(store).{{pascalCase}};

export const get{{pascalCase}}Loading = (store: RootState) =>
  get{{pascalCase}}(store).loading;
export const get{{pascalCase}}Error = (store: RootState) =>
  get{{pascalCase}}(store).error;

export const get{{pascalCase}}Data = (store: RootState) =>
  get{{pascalCase}}(store).data;

export const get{{pascalCase}}Result = (store: RootState) =>
  get{{pascalCase}}Data(store)?.result;
export const get{{pascalCase}}Total = (store: RootState) =>
  get{{pascalCase}}Data(store)?.total;
