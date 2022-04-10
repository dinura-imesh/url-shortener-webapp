import React from "react";

export interface IButtonLinkProps {
  label: string;
  onClick?: Function;
}
export const ButtonLink = ({ label, onClick }: IButtonLinkProps) => {
  return (
    <div
      className="mt-2 underline cursor-pointer text-slate-600 hover:text-slate-500 duration-200 active:text-slate-700 select-none"
      onClick={() => onClick?.()}
    >
      {label}
    </div>
  );
};
