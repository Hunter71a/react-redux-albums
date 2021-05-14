import { GET_ARTISTS_ALL } from "../types";

import axios from "axios";
const URL = "http://localhost:3004";

export function artistsListAll() {
  const request = axios.get(`${URL}/artists`).then((response) => response.data);

  return {
    type: GET_ARTISTS_ALL,
    payload: request,
  };
}
