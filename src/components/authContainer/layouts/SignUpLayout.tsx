import React from "react";
import { EnumAuthState } from "../../../enums/enumAuthState";
import { Button } from "../../button/Button";
import { ButtonLink } from "../../button/ButtonLink";

export interface ISignUpLayoutProps {
  onStateChange: (e: EnumAuthState) => void;
}
export const SignUpLayout = ({ onStateChange }: ISignUpLayoutProps) => {
  return (
    <div className="border p-4 rounded-md border-slate-400 flex flex-col">
      <div className="mb-5 text-lg">Sign Up</div>
      <input placeholder="First Name" type="text" className="mb-2" />
      <input placeholder="Last Name" type="text" className="mb-2" />
      <input placeholder="Email" type="email" className="mb-2" />
      <input placeholder="Password" type="password" className="mb-2" />
      <input placeholder="Verify Password" type="password" />
      <Button label="Sign Up" />
      <ButtonLink
        label="Sign In"
        onClick={() => {
          onStateChange(EnumAuthState.SIGN_IN);
        }}
      />
    </div>
  );
};
