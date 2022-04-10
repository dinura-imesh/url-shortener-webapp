import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-slate-700 h-14 flex flex-row items-center px-4 text-white select-none">
      <div className="font-semibold">Nek.tk</div>
      <div className="flex-grow" />
      <div className="mr-4 cursor-pointer hover:text-slate-100 active:text-slate-300 duration-200">
        Docs
      </div>
      <div className="cursor-pointer hover:text-slate-100 active:text-slate-300 duration-200">
        About
      </div>
    </div>
  );
};
