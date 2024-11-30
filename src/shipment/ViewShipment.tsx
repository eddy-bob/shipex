import { useParams } from "react-router-dom";
import { State, RenderIf } from "../components";
import { RequstState } from "../components/states/State";
import { useEffect, useState } from "react";
import { CustomButton, CustomInputField } from "../components";

const ViewShipment = () => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState<RequstState>("no-result");

  const data = {
    trackId: "4515645646466",
    updated: "Last updated 16/12/2023 11:33 AM",
    sender: "Mohamamd Manaa",
    consignee: "Beshouy Ezzat",
    originAddress: "Ahmed Hassan\n 25, Nile Street, Zamalek\n Cairo\n Egypt",
    shippingService: "Express Service",
    totalCODAmount: "499.55 EGP",
    destinationAddress:
      "Fatima Ali\n 10, Corniche Road Gleem\n Alexandria\n Egypt",
    shipmentCreated: {
      time: "12:05PM ",
      date: "Dec 16, 2023",
      description: "Shipment Description",
      by: "Abdo Saeed",
    },

    shipmentPickedUp: {
      time: "14:05PM",
      date: "Dec 16, 2023",
      by: "Beshouy Ezzat",
    },
    proofOfPickedUp: {
      time: "14:08PM",
      date: " Dec 16, 2023",
      by: "James Collins",
      description: "Proof of pick-up description",
    },
    shipmentOnDelivery: {
      time: "12:05PM",
      date: "Dec 16, 2023",
      description: "Description goes here",
    },
  };
  const fetchShipment = () => {};

 
  return (
    <div className="p-10 bg-white">
      <form
        onSubmit={fetchShipment}
        className="bg-blue-light w-full flex space-x-5  justify-center py-6  p-48 mb-2"
      >
        <CustomInputField
          placeholder="Enter AWB ID"
          className="w-[6000px]"
          inputStyle="placeholder:text-[#6B7280] text-grey-dark font-[500]"
          onChange={(value: string) => setSearch(value)}
        />
        <CustomButton
          type="submit"
          title="Track"
          className=""
          disabled={search === "" ? true : false}
        />
      </form>
      <RenderIf condition={false}>
        <div className="pt-3 flex gap-20">
          <div className="flex-1 border border-[#E5E7EB] rounded-xl ">
            <div className="p-4">
              <div>
                <p className="text-grey-dark text-[18px] font-[700]">
                  {data.trackId}
                </p>
                <p className="text-grey-lighter text-[14px] font-[400]">
                  {data.updated}
                </p>
              </div>
              <div className="py-8 pl-3.5 pr-20">
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-3 items-center ">
                      <span>
                        <img src="/images/arrow-up-right.png" alt="icon" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Sender
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {data.sender}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/user.png" alt="icon" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Consignee
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {data.consignee}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/arrow-down-to-dot.png" alt="icon" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Origin Address
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {data.originAddress}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex pb-7 space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/map-pin.png" alt="icon" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Destination Address
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {data.destinationAddress}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex  space-x-2">
                  <div className="flex-1">
                    <div className="flex  space-x-2 items-center ">
                      <span>
                        <img src="/images/truck.png" alt="icon" />
                      </span>
                      <p className="text-grey-lighter font-[500] text-[15px]">
                        Shipping Service
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-grey-dark font-[500] text-[15px]">
                      {data.shippingService}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-[96px] rounded-b-lg bg-blue-light px-8 py-5 ">
              <div className=" ">
                <div className="flex  space-x-2 items-center ">
                  <span>
                    <img src="/images/receipt.png" alt="icon" />
                  </span>
                  <p className="text-grey-lighter font-[500] text-[15px]">
                    Total COD Amount
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-grey-dark font-[500] text-[15px]">
                  {data.totalCODAmount}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-[14px] font-[400] p-2">
            <p className="text-grey-dark text-[18px] font-[700]">TIMELINE</p>
            <div className="pt-4 ">
              <div className="flex  items-start space-x-3 ">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{data.shipmentCreated.time}</p>
                  <p>{data.shipmentCreated.date}</p>
                </div>
                <div className="flex flex-col   items-center min-h-[118px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/package-plus.png" />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className="">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Shipment created
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {data.shipmentCreated.description}
                  </p>
                  <div className="pt-2 flex space-x-2 align-top">
                    <img
                      src="/images/avatar.png"
                      alt="avatar"
                      className="rounded-full mt-1"
                    />
                    <p className="text-grey-dark text-[15px] font-[600]">
                      {data.shipmentCreated.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start  space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{data.shipmentPickedUp.time}</p>
                  <p>{data.shipmentPickedUp.date}</p>
                </div>
                <div className="flex  h-full min-h-[97px]  items-center flex-col">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/package-check.png" />
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
                      {data.shipmentPickedUp.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{data.proofOfPickedUp.time}</p>
                  <p>{data.proofOfPickedUp.date}</p>
                </div>
                <div className="flex flex-col items-center min-h-[113px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/package-search.png" />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className=" pb-10">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Proof of pick-up
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {data.proofOfPickedUp.description}
                  </p>
                  <div className=" flex space-x-2 pt-1">
                    <img
                      src="/images/avatar.png"
                      alt="avatar"
                      className="rounded-full mt-1"
                    />
                    <p className="text-grey-dark text-[15px] font-[600]">
                      {data.proofOfPickedUp.by}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-start space-x-3">
                <div className="text-grey-lighter  text-[14px] font-[500]">
                  <p>{data.shipmentOnDelivery.time}</p>
                  <p>{data.shipmentOnDelivery.date}</p>
                </div>
                <div className="flex flex-col items-center min-h-[85px] h-full">
                  <div className="border p-1 border-[#E5E7EB] rounded-full">
                    <img src="/images/truck.png" />
                  </div>
                  <div className="flex-1  h-full  bg-[#E5E7EB] px-[1px] py-1"></div>
                </div>
                <div className=" pb-10">
                  <p className="text-grey-dark text-[16px] font-[600]">
                    Shipment on delivery
                  </p>
                  <p className="text-grey-lighter text-[16px] font-[500]">
                    {data.shipmentOnDelivery.description}
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </RenderIf>
      <RenderIf condition={true}>
        <div className="flex mt-20 items-center justify-center">
          <State type={state} />
        </div>
      </RenderIf>
    </div>
  );
};

export default ViewShipment;
