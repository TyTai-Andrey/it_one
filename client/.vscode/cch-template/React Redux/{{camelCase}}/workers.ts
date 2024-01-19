// Core
import { put, call } from 'redux-saga/effects';

// Actions
import { {{camelCase}}Actions } from './actions';

// Api
import {{pascalCase}}Api from '@api/{{pascalCase}}Api';


export function* fetch{{pascalCase}}(action: any) {
  yield put({{camelCase}}Actions.fetch{{pascalCase}}Request());

  const filter = action.payload;

  const { response, error } = yield call(
    {{pascalCase}}Api.get{{pascalCase}},
    filter,
  );
  if (response) {
    yield put(
      {{camelCase}}Actions.fetch{{pascalCase}}Success(response.data),
    );
  } else if (error) {
    yield put({{camelCase}}Actions.fetch{{pascalCase}}Failure());
  }
}
