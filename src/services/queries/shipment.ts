import { useMutation } from "@tanstack/react-query";
import { errorToast, handleErrors } from "../../helper";
import api from "../api";
import shipmentKey from "../queryKeys/shipment";
import { error } from "console";

/* eslint-disable react-hooks/rules-of-hooks */
const trackShipment = (options?: any) => {
  const { mutateAsync, ...response } = useMutation(api.get, {
    mutationKey: [shipmentKey.get],
    ...options,
    onSuccess: async (data: any) => {
      console.log(data);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    ...response,
    mutateAsync: (body: { name: string }) => {
      const url = `/frappe.client.get`;

      mutateAsync({
        url,
        body: { doctype: "AWB", filters: { name: ["like", body.name] } },
      });
    },
  };
};

const queries = {
  trackShipment,
};

export default queries;
