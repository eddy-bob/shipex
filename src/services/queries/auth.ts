import { useMutation } from "@tanstack/react-query";
import { TKE_KEY, AUTH_USER } from "../../utils/static";
import routes from "../../routes";

import {
  errorToast,
  handleErrors,
  setLocalStorage,
  successToast,
} from "../../helper";
import api from "../api";
import auth from "../queryKeys/auth";
import { Navigate, useLocation } from "react-router-dom";

interface LoginData {
  pwd: string;
  usr: string;
}
const login = async (options?: any) => {
  const { mutate, ...response } = useMutation({
    mutationFn: api.post,
    mutationKey: [auth.login],
    ...options,
    onSuccess: async (data: any) => {
      successToast("Signin successful");
      console.log(data);
      setLocalStorage(data?.data?.accessToken, TKE_KEY);
      setLocalStorage(data?.data?.user, AUTH_USER);
      const navigate = useLocation();
      setTimeout(() => {
        if (navigate.state?.next) {
          const nextUrl = navigate.state.next as string;
          Navigate({ to: nextUrl });
        } else {
          Navigate({ to: routes.shipment.single.path });
        }
      }, 1000);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: LoginData) => {
      const url = `login`;

      mutate({ url, body });
    },
  };
};

const queries = {
  login,
};

export default queries;
