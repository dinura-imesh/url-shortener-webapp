import React, { createContext, useEffect, useState } from "react";
import { EnumAuthState } from "../../enums/enumAuthState";
import { getUser } from "../../services/user.service";
import { IUser } from "../../types/user.type";
import { getAuthTokens, hasAuthTokens } from "../../utils/token";
import { Navbar } from "../navbar/Navbar";
import { SignInLayout } from "./layouts/SignInLayout";
import { SignUpLayout } from "./layouts/SignUpLayout";

export interface IAuthContext {
  user?: IUser;
  logout?: Function;
}
export const authContext = createContext<IAuthContext>({});

export const AuthContainer: React.FC = (props) => {
  const [authState, setAuthState] = useState<EnumAuthState>(
    EnumAuthState.SIGN_IN
  );
  const [user, setUser] = useState<IUser>();

  const logout = () => {
    setUser(undefined);
    localStorage.clear();
    setAuthState(EnumAuthState.SIGN_IN);
  };

  const tokenAuth = async () => {
    const userResponse = await getUser();
    if (userResponse.status === 200) {
      setUser(userResponse.data as IUser);
      setAuthState(EnumAuthState.SIGNED_IN);
    }
  };

  useEffect(() => {
    if (hasAuthTokens()) tokenAuth();
  }, []);

  const getAuthLayout = () => {
    switch (authState) {
      case EnumAuthState.SIGN_UP:
        return <SignUpLayout onStateChange={(e) => setAuthState(e)} />;
      default:
        return (
          <SignInLayout
            onStateChange={(e) => setAuthState(e)}
            onSignIn={(userData: IUser) => {
              setUser(userData);
              setAuthState(EnumAuthState.SIGNED_IN);
            }}
          />
        );
    }
  };

  return (
    <authContext.Provider
      value={{
        user: user,
        logout: logout,
      }}
    >
      <div>
        {authState === EnumAuthState.SIGNED_IN ? (
          props.children
        ) : (
          <div>
            <Navbar />
            <div className="flex items-center justify-center content-height">
              {getAuthLayout()}
            </div>
          </div>
        )}
      </div>
    </authContext.Provider>
  );
};
