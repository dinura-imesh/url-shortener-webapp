import React from "react";
import { EnumAuthState } from "../../../enums/enumAuthState";
import { Button } from "../../button/Button";
import { ButtonLink } from "../../button/ButtonLink";

export interface ISignInLayoutProps {
  onStateChange: (e: EnumAuthState) => void;
  onSignIn?: Function;
}

export const SignInLayout = ({
  onStateChange,
  onSignIn,
}: ISignInLayoutProps) => {
  return (
    <div className="border p-4 rounded-md border-slate-400 flex flex-col">
      <div className="mb-5 text-lg">Sign In</div>
      <input placeholder="Email" type="email" className="mb-2" />
      <input placeholder="Password" type="password" />
      <Button label="Sign In" onClick={() => onSignIn?.()} />
      <ButtonLink
        label="Sign Up"
        onClick={() => {
          onStateChange(EnumAuthState.SIGN_UP);
        }}
      />
    </div>
  );
};
