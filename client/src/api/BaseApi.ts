import axios from 'axios';

export default class BaseApi {
  static getClient() {
    return axios.create({
      baseURL: '',
      headers: {
        Accept: 'application/json',
      },
    });
  }

  static getLocalClient() {
    return axios.create({
      baseURL: 'http://localhost:5000',
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
