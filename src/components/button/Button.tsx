import React from "react";

export interface IButtonProps {
  label: string;
  onClick?: Function;
}
export const Button = ({ label, onClick }: IButtonProps) => {
  return (
    <button
      className="bg-slate-600 text-white py-1 mt-2 px-4 rounded-sm hover:bg-slate-500 duration-200 active:bg-slate-700 select-none"
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
};
