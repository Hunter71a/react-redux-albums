import { GET_ARTISTS_ALL, GET_ARTISTS_SEARCH } from '../types';

import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistsListAll() {
  const request = axios.get(`${URL}/artists`).then((response) => response.data);
  // const request = axios.get(`${URL}/artists?_limit=6`).then((response) => response.data);
  return {
    type: GET_ARTISTS_ALL,
    payload: request,
  };
}

export function artistListSearch(keywords) {
  const request = axios
    .get(`${URL}/artists?q=${keywords}`)
    .then((response) => response.data);
  return {
    type: GET_ARTISTS_SEARCH,
    payload: request,
  };
}
