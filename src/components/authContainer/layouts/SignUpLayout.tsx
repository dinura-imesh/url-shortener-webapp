import React, { useState } from "react";
import { EnumAuthState } from "../../../enums/enumAuthState";
import { generateApiKey } from "../../../services/api.service";
import { signUp } from "../../../services/auth.service";
import { getUser } from "../../../services/user.service";
import { IUser } from "../../../types/user.type";
import { setAuthTokens } from "../../../utils/token";
import { Button } from "../../button/Button";
import { ButtonLink } from "../../button/ButtonLink";

export interface ISignUpLayoutProps {
  onStateChange: (e: EnumAuthState) => void;
  onSignUp?: (user: IUser) => void;
}
export const SignUpLayout = ({
  onStateChange,
  onSignUp,
}: ISignUpLayoutProps) => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [error, setError] = useState<string>();

  const handleSignUp = async () => {
    if (!validate()) return;
    try {
      const response = await signUp(email, firstName, lastName, password);
      if (response.data.status === "SIGNED_IN") {
        setAuthTokens(response.data.authToken, response.data.refreshToken);
        await generateApiKey();
        const userResponse = await getUser();
        onSignUp?.(userResponse.data as IUser);
      } else {
        setError("Error occurred while signing up");
      }
    } catch (error) {
      setError("Error occurred while signing up");
    }
  };

  const validate = () => {
    setError(undefined);
    if (firstName.length <= 2 || lastName.length <= 2 || email.length <= 5) {
      setError("Please fill all form fields");
      return false;
    }
    if (password.length < 8) {
      setError("Password too weak");
      return false;
    }
    if (password !== verifyPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  return (
    <div className="border p-4 rounded-md border-slate-400 flex flex-col">
      <div className="mb-5 text-lg">Sign Up</div>
      <input
        placeholder="First Name"
        type="text"
        className="mb-2"
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        type="text"
        className="mb-2"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        className="mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        className="mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Verify Password"
        type="password"
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <Button label="Sign Up" onClick={handleSignUp} />
      {error && <div className="text-sm text-red-500 mt-1">{error}</div>}
      <ButtonLink
        label="Sign In"
        onClick={() => {
          onStateChange(EnumAuthState.SIGN_IN);
        }}
      />
    </div>
  );
};
