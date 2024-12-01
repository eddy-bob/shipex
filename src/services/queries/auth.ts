import { useMutation } from "@tanstack/react-query";
// import { TKE_KEY, AUTH_USER } from "../../utils/static";
import routes from "../../routes";
import {
  errorToast,
  handleErrors,
  // setLocalStorage,
  successToast,
} from "../../helper";
import api from "../api";
import auth from "../queryKeys/auth";

interface LoginData {
  pwd: string;
  usr: string;
}

/* eslint-disable react-hooks/rules-of-hooks */
const login = (options?: any) => {
  const { mutateAsync, ...response } = useMutation(api.post, {
    mutationKey: [auth.login],
    ...options,
    onSuccess: async (data: any) => {
      successToast("Signin successful");
      console.log(data);
      // setLocalStorage(data?.data?.accessToken, TKE_KEY);
      // setLocalStorage(data?.data?.user, AUTH_USER);

      setTimeout(() => {
        const url = new URL(window.location.href);
        const nextValue = url.searchParams.get("next");
        if (nextValue) {
          window.location.href = nextValue;
        } else {
          window.location.href = routes.shipment.single.path;
        }
      }, 1000);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
      
    },
  });
  return {
    ...response,
    mutateAsync: (body: LoginData) => {
      const url = `login`;

      mutateAsync({ url, body });
    },
  };
};

const queries = {
  login,
};

export default queries;
