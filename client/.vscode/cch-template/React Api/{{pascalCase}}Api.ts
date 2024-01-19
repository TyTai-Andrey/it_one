import qs from 'qs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { serverError } from '@utils/notifications';

// Utils
import BaseApi from '@api/BaseApi';

// Types
import {
  IdName,
} from '@typings/swagger';
import {
  FilterResult,
} from '@typings/data';
import { Get{{pascalCase}}Filter } from '@bus/{{camelCase}}/interfaces';


const countInPage = 10;

const toSkipTake = (page: number) => {
  return {
    Skip: countInPage * (page - 1),
    Take: countInPage,
  };
};

export default class {{pascalCase}}Api {
  static get{{pascalCase}} (
    params: Get{{pascalCase}}Filter,
  ): Promise<{ response: FilterResult<{{pascalCase}}ItemModel> } | { error: string }> {
    const { id } = data;
    const client = BaseApi.getClient();
    const options: AxiosRequestConfig = {
      url: `/scdoc/FamiliarizationTemplate/${id}`,
      method: 'GET',
      params,
    };

    return client(options)
      .then((response: AxiosResponse<FilterResult<{{pascalCase}}ItemModel>>) => ({ response: response.data }))
      .catch((error: Error) => {
        serverError(error.message);
        return { error: error.message };
      });
  }

  static get{{pascalCase}}List(
    Search: string,
    Page: number,
  ): Promise<FilterResult<IdName>> {
    const client = BaseApi.getClient();

    const { Skip, Take } = toSkipTake(Page);
 
    const options: AxiosRequestConfig = {
      url: '/api/Data/{{camelCase}}',
      method: 'GET',
      params: {
        Search,
        Skip,
        Take,
      },
    };

    return client(options)
      .then((response) => response.data)
      .catch((error: Error) => {
        serverError(error.message);
      });
  }

  static getOne{{pascalCase}} (id: string | number): Promise<IdName> {
    const client = BaseApi.getClient();

    return client.get(`/api/{{camelCase}}/${id}`).then((response) => response.data);
  }
}
