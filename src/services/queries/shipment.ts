import { useMutation } from "@tanstack/react-query";
import {
  errorToast,
  handleErrors,
} from "../../helper";
import api from "../api";
import shipmentKey from "../queryKeys/shipment";

/* eslint-disable react-hooks/rules-of-hooks */
const trackShipment =  (options?: any) => {
  const { mutateAsync, ...response } = useMutation(api.get, {
    mutationKey: [shipmentKey.get],
    ...options,
    onSuccess: async (data: any) => {
      console.log(data);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutateAsync: (body: { name: string }) => {
      const url = `/frappe.client.get`;

      mutateAsync({ url, body });
    },
  };
};

const queries = {
  trackShipment,
};

export default queries;
