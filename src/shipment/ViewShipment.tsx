import { State, RenderIf } from "../components";
import { RequstState } from "../components/states/State";
import React, { useEffect, useState } from "react";
import { CustomButton, CustomInputField } from "../components";
import queries from "../services/queries/shipment";
import { data } from "../utils/static";

const ViewShipment = () => {
  const [search, setSearch] = useState("210173066689");
  const [state, setState] = useState<RequstState>("no-result");
  const [validationMessage, setValidationMessage] = useState<string>();
  const [shipment, setShipment] = useState<any>();
  const {
    mutateAsync,
    isLoading,
    data: shipmentData,
    error,
  } = queries.trackShipment();

  const fetchShipment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.length !== 12) {
      setState("invalid-option");
      return;
    }

    // TODO:update the  server api to accept Get request data as query params as the web client does not allow GET request to have a body.
    //I have created a static data object to simulate the data supposed to come from the backend so you can see what te=he design looks like as well as statically validated it so you can see the various states at work
    mutateAsync({ name: search });

    //setShipment(shipmentData);
    if (search === "210173066689") {
      setShipment(data);
    } else {
      setShipment(undefined);
      setState("not-found");
    }
    const errorBody: any = error;
    if (errorBody && errorBody?.code && errorBody?.code === "ERR_NETWORK") {
       setShipment(undefined);
      setState("network-error");
    }
  };

  useEffect(() => {
    search.length === 12
      ? setValidationMessage("")
      : setValidationMessage("Please enter a valid AWB");
  }, [search]);
  return (
    <div className="p-10 bg-white">
      <form
        onSubmit={fetchShipment}
        className="bg-blue-light w-full flex space-x-5  justify-center py-6  p-48 mb-2"
      >
        <CustomInputField
          placeholder="Enter AWB ID"
          validationErrorMessage={validationMessage}
          className="w-[600px]"
          value={search}
          inputStyle="placeholder:text-[#6B7280] text-grey-dark font-[500]"
          onChange={(value: string) => setSearch(value)}
        />
        <CustomButton
          type="submit"
          isLoading={isLoading}
          title="Track"
          className="w-[100px] h-[44px] "
          disabled={search === "" ? true : false}
        />
      </form>
      <RenderIf condition={!isLoading && !!shipment}>
        <div className="pt-3 flex gap-20">
          <div className="flex-1 border border-[#E5E7EB] rounded-xl ">
            <div className="p-4">
              <div>
                <p className="text-grey-dark text-[18px] font-[700]">
                  {shipment?.trackId}
                </p>
                <p className="text-grey-lighter text-[14px] font-[400]">
                  {shipment?.updated}
                </p>
              </div>
              <div className="py-8 pl-3.5 pr-20">
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-3 items-center ">
                      <span>
                        <img
                          src="/images/arrow-up-right.png"
                          alt="arrow-up-right"
                        />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Sender
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {shipment?.sender}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/user.png" alt="user" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Consignee
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {shipment?.consignee}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img
                          src="/images/arrow-down-to-dot.png"
                          alt="arrow-down-to-dot"
                        />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Origin Address
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {shipment?.originAddress}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/map-pin.png" alt="/map-pin" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Destination Address
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {shipment?.destinationAddress}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex  space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/truck.png" alt="truck" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Shipping Service
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {shipment?.shippingService}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-[96px] rounded-b-lg bg-blue-light px-8 py-5 ">
              <div className=" ">
                <div className="flex  space-x-2 items-center ">
                  <span>
                    <img src="/images/receipt.png" alt="reciept" />
                  </span>
                  <p className="text-grey-lighter font-[500] text-[15px]">
                    Total COD Amount
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-grey-dark font-[500] text-[15px]">
                  {shipment?.totalCODAmount}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-[14px] font-[400] p-2">
            <p className="text-grey-dark text-[18px] font-[700]">TIMELINE</p>
            <div className="pt-4 ">
              <div className="flex  items-start space-x-3 ">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{shipment?.shipmentCreated.time}</p>
                  <p>{shipment?.shipmentCreated.date}</p>
                </div>
                <div className="flex flex-col   items-center min-h-[118px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/package-plus.png" alt="package-plus" />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className="">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Shipment created
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {shipment?.shipmentCreated.description}
                  </p>
                  <div className="pt-2 flex space-x-2 align-top">
                    <img
                      src="/images/avatar.png"
                      alt="avatar"
                      className="rounded-full mt-1"
                    />
                    <p className="text-grey-dark text-[15px] font-[600]">
                      {shipment?.shipmentCreated.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start  space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{shipment?.shipmentPickedUp.time}</p>
                  <p>{shipment?.shipmentPickedUp.date}</p>
                </div>
                <div className="flex  h-full min-h-[97px]  items-center flex-col">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/package-check.png" alt="package-check" />
                  </div>
                  <div className="flex-1  h-full  w-[1px] bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Shipment picked-up
                  </p>

                  <div className=" flex space-x-2">
                    <img
                      src="/images/avatar.png"
                      alt="avatar"
                      className="rounded-full mt-1"
                    />
                    <p className="text-grey-dark text-[15px] font-[600]">
                      {shipment?.shipmentPickedUp.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{shipment?.proofOfPickedUp.time}</p>
                  <p>{shipment?.proofOfPickedUp.date}</p>
                </div>
                <div className="flex flex-col items-center min-h-[113px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img
                      src="/images/package-search.png"
                      alt="package-search"
                    />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className=" pb-10">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Proof of pick-up
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {shipment?.proofOfPickedUp.description}
                  </p>
                  <div className=" flex space-x-2 pt-1">
                    <img
                      src="/images/avatar.png"
                      alt="avatar"
                      className="rounded-full mt-1"
                    />
                    <p className="text-grey-dark text-[15px] font-[600]">
                      {shipment?.proofOfPickedUp.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{shipment?.shipmentOnDelivery.time}</p>
                  <p>{shipment?.shipmentOnDelivery.date}</p>
                </div>
                <div className="flex flex-col items-center min-h-[85px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/truck.png" alt="truck" />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className=" pb-10">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Shipment on delivery
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {shipment?.shipmentOnDelivery.description}
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </RenderIf>
      <RenderIf condition={isLoading && !!shipmentData === false}>
        <div className="flex mt-20 items-center  justify-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 mr-1 mt-1 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </RenderIf>
      <RenderIf condition={!isLoading && !!shipment === false}>
        <div className="flex mt-20 items-center justify-center">
          <State action={fetchShipment} type={state} />
        </div>
      </RenderIf>
    </div>
  );
};

export default ViewShipment;
