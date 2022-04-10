import React from "react";
import copyIcon from "../assets/icons/copy.png";
import { Button } from "../components/button/Button";

export const HomePage = () => {
  return (
    <div className="flex flex-col content-height items-center">
      <div className="mt-4 text-lg">
        Account Status: <span className="text-red-500 font-bold">FREE</span>
      </div>
      <div className="px-4">
        Your account is limited to 25 urls shortened per day
      </div>
      <div className="flex-grow" />
      <div className="border-2 border-dotted w-fit px-8 py-4">
        <div>Your API Key</div>
        <div className=" bg-slate-200 rounded-sm mt-2 flex flex-row items-center h-9">
          <span className="p-2 text-sm text-center w-full">
            0se123123as11-123sa.123123as312-asd123sd
          </span>
          <div className="flex-grow" />
          <div className="bg-slate-600 h-9 w-9 rounded-sm flex items-center justify-center hover:bg-slate-500 cursor-pointer active:bg-slate-700 duration-200">
            <img src={copyIcon} className="h-5" />
          </div>
        </div>
        <Button label="Generate New API Key" />
        <div className="text-xs mt-2">
          <span className="text-red-500 font-bold">Caution: </span>
          Generating a new API Key will invalidate your old API Key
        </div>
      </div>
      <div className="flex-grow" />
      <div className="h-24">
        <div>
          Unlimited access just for <span className="font-bold">$8</span> per
          month
        </div>
        <Button label="Purchase Premium" />
      </div>
    </div>
  );
};
