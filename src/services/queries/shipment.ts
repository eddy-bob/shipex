import { useMutation } from "@tanstack/react-query";
import {
  errorToast,
  handleErrors,
} from "../../helper";
import api from "../api";
import shipmentKey from "../queryKeys/shipment";

const shipment = async (options?: any) => {
  const { mutate, ...response } = useMutation({
    mutationFn: api.post,
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
    mutate: (body: { search:string}) => {
      const url = `/frappe.client.get`;

      mutate({ url, body });
    },
  };
  
};

const queries = {
  shipment,
};

export default queries;
