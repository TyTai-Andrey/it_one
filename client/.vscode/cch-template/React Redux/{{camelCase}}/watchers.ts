// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { {{camelCase}}Types } from './types';

// Workers
import {
  fetch{{pascalCase}},
} from './workers';

function* watchFetch{{pascalCase}}() {
  yield takeLatest(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_ASYNC,
    fetch{{pascalCase}},
  );
}

export function* watch{{pascalCase}}() {
  yield all([
    call(watchFetch{{pascalCase}}),
  ]);
}
