import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "@/route";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      removeToken();
      router.navigate("/login");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export { request };
