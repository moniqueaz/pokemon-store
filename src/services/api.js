import axios from 'axios';

export const pokemon = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/pokemon`,
});

export const abilityWithoutBaseURL = axios.create({
  baseURL: '',
});

export const ability = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/ability`,
});

export const type = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API_POKEMON}/type/${process.env.REACT_APP_TYPE}`,
});
