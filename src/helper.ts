import { Id, toast } from "react-toastify";

export const errorToast = (
  message?: string,
  fallback = "Opps Something went wrong",
  toastId?: Id
) => {
  toast.error(message || fallback, {
    toastId,
  });
};

export const successToast = (
  message?: string,
  fallback = "Successful",
  toastId?: Id
) => {
  toast.success(message || fallback, { toastId });
};

export const setLocalStorage = (data: any, key: string) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    return true;
  } catch (error) {
    return false;
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData);
  } catch (error) {
    return null;
  }
};

export function handleErrors(err: any) {
  const { response, message } = err;
  if (!response) return "Opps Something went wrong";
  const { data } = response;

  if (!data) return message;

  const errorMessage: string = data?.message || "Opps Something went wrong";

   Promise.reject(errorMessage);
   return errorMessage
}
