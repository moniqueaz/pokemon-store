import axios from 'axios';
// import { URL_API_GITHUB } from './config';

export const pokemon = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/pokemon`,
});

export const ability = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/ability`,
});

export const type = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/type/${process.env.REACT_APP_TYPE}`,
});
