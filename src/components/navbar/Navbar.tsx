import React, { useContext } from "react";
import { authContext, IAuthContext } from "../authContainer/AuthContainer";

export interface INavbarProps {
  fullNavbar?: boolean;
}
export const Navbar = ({ fullNavbar }: INavbarProps) => {
  const context = useContext<IAuthContext>(authContext);
  return (
    <div className="bg-slate-700 h-14 flex flex-row items-center px-4 text-white select-none w-full">
      <div className="font-semibold">Nek.tk</div>
      <div className="flex-grow" />
      <div className="mr-4 cursor-pointer hover:text-slate-100 active:text-slate-300 duration-200">
        Docs
      </div>
      <div className="mr-4 cursor-pointer hover:text-slate-100 active:text-slate-300 duration-200">
        About
      </div>
      {fullNavbar && (
        <div
          onClick={() => context.logout?.()}
          className="cursor-pointer hover:text-slate-100 active:text-slate-300 duration-200"
        >
          Log Out
        </div>
      )}
    </div>
  );
};
