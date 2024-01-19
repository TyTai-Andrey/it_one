import { AxiosRequestConfig, AxiosResponse } from 'axios';

// Utils
import BaseApi from '@api/BaseApi';

import { ServiceModel } from '@bus/services/interfaces';

export default class ServicesApi {
  static async getServices(): Promise<
    { response: ServiceModel[] } | { error: string }
  > {
    const client = BaseApi.getClient();
    const options: AxiosRequestConfig = {
      url: `/api/services`,
      method: 'GET',
    };

    return client(options)
      .then((response: AxiosResponse<ServiceModel[]>) => ({
        response: response.data,
      }))
      .catch((error: Error) => {
        return { error: error.message };
      });
  }

  static async getOneService(
    id: string | number,
  ): Promise<{ response: ServiceModel } | { error: string }> {
    const client = BaseApi.getClient();

    return client
      .get(`/api/services/${id}`)
      .then((response: AxiosResponse<ServiceModel>) => ({
        response: response.data,
      }))
      .catch((error: Error) => {
        return { error: error.message };
      });
  }
}
