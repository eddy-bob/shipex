import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import routes from "../routes";
import { SERVER_URL, TKE_KEY } from "../utils/static";
import { getLocalStorage } from "../helper";

export const baseURL = `${SERVER_URL}/`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: true,
});

const onRequest = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = getLocalStorage(TKE_KEY);

  if (!request.headers) return request;
  request.headers!.Authorization = `Bearer ${token}`;
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError) => {
  const statusCode = error.response!.status;

  if (statusCode === 401) {
    localStorage.clear();
    // redirect to login page if not already there
    // if (window.location.pathname !== routes.auth.login.path && (window.location.pathname !== '/')) {
    //   let nextUrl = `${routes.auth.login.path}?next=${window.location.pathname}`;

    //   window.location.href = nextUrl;
    // }
  }

  return Promise.reject(error);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
