import axios from "axios";
import { setToken, getToken } from "./scripts/token";

const instance = axios.create({
  baseURL: "https://api.gomlim.com/v1",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.accept = "text/plain";
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("original Request=>", originalRequest);
      try {
        const token = getToken();
        const response = await axios.post(
          "https://api.gomlim.com/v1/User/RefreshToken",
          { accessToken: token.accessToken, refreshToken: token.refreshToken },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const { data } = response;
        setToken(data);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        if (
          error.response.status === 500 ||
          error.response.status === 400 ||
          error.response.status === 422
        ) {
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default instance;
