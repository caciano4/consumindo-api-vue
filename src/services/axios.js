const axios = require("axios").default;

const customAxios = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

export default customAxios;