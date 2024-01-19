// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { {{camelCase}}Types } from './types';

import { Get{{pascalCase}}Filter, {{pascalCase}}ItemModel } from './interfaces';
import { FilterResult } from '@typings/data';

// bus/index.ts
// {{camelCase}}: {{camelCase}}Reducer,
// call(watch{{pascalCase}}),

//Component {{pascalCase}}
// {{camelCase}}Actions
// {{camelCase}}Shapes

// get{{pascalCase}}Loading
// get{{pascalCase}}Error

// get{{pascalCase}}Data
// get{{pascalCase}}Result
// get{{pascalCase}}Total

export const {{camelCase}}Actions = {
  // Sync
  fetch{{pascalCase}}Request: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_REQUEST,
  ),

  fetch{{pascalCase}}Success: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_SUCCESS,
    (data: FilterResult<{{pascalCase}}ItemModel>) => ({ payload: data }),
  ),

  fetch{{pascalCase}}Failure: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_FAILURE,
  ),

  // Async
  fetch{{pascalCase}}Async: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_ASYNC,
    (payload: Get{{pascalCase}}Filter) => ({ payload }),
  ),
};
