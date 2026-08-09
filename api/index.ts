import axios from "axios";


//* create axios instance

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",


});

//* interceptor

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request intercept ", config.url)
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;