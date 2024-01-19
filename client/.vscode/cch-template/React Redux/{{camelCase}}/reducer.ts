// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { {{camelCase}}Actions } from './actions';

// Typings
import { FilterResult } from '@typings/data';
import {
    {{pascalCase}}ItemModel,
} from './interfaces';

interface InitialState {
    {{pascalCase}}: {
        data: FilterResult<{{pascalCase}}ItemModel> | null;
        loading: boolean;
        error: boolean;
    };
}

const initialState: InitialState = {
    {{pascalCase}}: {
        data: null,
        loading: true,
        error: false,
    },
};

export const {{camelCase}}Reducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Request,
            (state) => {
                state.{{pascalCase}}.loading = true;
                state.{{pascalCase}}.error = false;
            },
        );

        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Success,
            (state, action) => {
                state.{{pascalCase}}.data = action.payload;
                state.{{pascalCase}}.loading = false;
                state.{{pascalCase}}.error = false;
            },
        );

        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Failure,
            (state) => {
                state.{{pascalCase}}.data = null;
                state.{{pascalCase}}.loading = false;
                state.{{pascalCase}}.error = true;
            },
        );
    },
);
