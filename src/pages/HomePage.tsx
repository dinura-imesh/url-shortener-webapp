import React, { useContext, useEffect, useState } from "react";
import copyIcon from "../assets/icons/copy.png";
import {
  authContext,
  IAuthContext,
} from "../components/authContainer/AuthContainer";
import { Button } from "../components/button/Button";
import { Spinner } from "../components/spinner/Spinner";
import { getApiKey } from "../services/api.service";

export const HomePage = () => {
  const context = useContext<IAuthContext>(authContext);
  const [apiKey, setApiKey] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadApiKey = async () => {
    try {
      const response = await getApiKey();
      if (response.status === 200) {
        setApiKey(response.data.apiKey);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey ?? "");
  };

  useEffect(() => {
    loadApiKey();
  }, []);

  return (
    <div className="flex flex-col content-height items-center">
      <div className="mt-4 text-lg">
        Account Status:{" "}
        <span
          className={`${
            context.user?.isPremium ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {context.user?.isPremium ? "PREMIUM" : "FREE"}
        </span>
      </div>
      <div className="px-4">
        Your account is limited to 25 urls shortened per day
      </div>
      <div className="flex-grow" />
      <div className="border-2 border-dotted w-fit px-8 py-4">
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div>Your API Key</div>
            <div className=" bg-slate-200 rounded-sm mt-2 flex flex-row items-center h-9">
              <span className="p-2 text-sm text-center w-full">{apiKey}</span>
              <div className="flex-grow" />
              <div
                onClick={copyToClipboard}
                className="bg-slate-600 h-9 w-9 rounded-sm flex items-center justify-center hover:bg-slate-500 cursor-pointer active:bg-slate-700 duration-200"
              >
                <img src={copyIcon} className="h-5" />
              </div>
            </div>
            {context.user?.isPremium && (
              <div>
                <Button label="Generate New API Key" />
                <div className="text-xs mt-2">
                  <span className="text-red-500 font-bold">Caution: </span>
                  Generating a new API Key will invalidate your old API Key
                </div>
              </div>
            )}
          </div>
        )}
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
