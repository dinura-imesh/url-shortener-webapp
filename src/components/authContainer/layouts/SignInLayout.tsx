import React, { useState } from "react";
import { EnumAuthState } from "../../../enums/enumAuthState";
import { signIn } from "../../../services/auth.service";
import { getUser } from "../../../services/user.service";
import { IUser } from "../../../types/user.type";
import { setAuthTokens } from "../../../utils/token";
import { Button } from "../../button/Button";
import { ButtonLink } from "../../button/ButtonLink";

export interface ISignInLayoutProps {
  onStateChange: (e: EnumAuthState) => void;
  onSignIn?: (user: IUser) => void;
}

export const SignInLayout = ({
  onStateChange,
  onSignIn,
}: ISignInLayoutProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSignIn = async () => {
    setIsError(false);
    try {
      const response = await signIn(email, password);
      if (response.data.status === "SIGNED_IN") {
        setAuthTokens(response.data.authToken, response.data.refreshToken);
        const userResponse = await getUser();
        onSignIn?.(userResponse.data as IUser);
      } else {
        setIsError(true);
      }
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <div className="border p-4 rounded-md border-slate-400 flex flex-col">
      <div className="mb-5 text-lg">Sign In</div>
      <input
        placeholder="Email"
        type="email"
        className="mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Sign In" onClick={() => handleSignIn()} />
      {isError && (
        <div className="text-sm text-red-500 mt-1">
          Incorrect email or password
        </div>
      )}
      <ButtonLink
        label="Sign Up"
        onClick={() => {
          onStateChange(EnumAuthState.SIGN_UP);
        }}
      />
    </div>
  );
};
