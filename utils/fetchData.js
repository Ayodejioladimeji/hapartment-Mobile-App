import axios from "axios";

// bring in the endpoint
// import { ENDPOINT } from "@env";

const ENDPOINT = "http://localhost:8000/api/v1";

// THE POST DATA API
export const postDataApi = async (url, data) => {
  const res = await axios.post(ENDPOINT + url, data);
  return res;
};

// THE GET DATA API
export const getDataApi = async (url, token) => {
  const res = await axios.get(ENDPOINT + url, {
    headers: { Authorization: token },
  });
  return res;
};