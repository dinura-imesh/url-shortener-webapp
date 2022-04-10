import React, { useState } from "react";
import { EnumAuthState } from "../../enums/enumAuthState";
import { SignInLayout } from "./layouts/SignInLayout";
import { SignUpLayout } from "./layouts/SignUpLayout";

export const AuthContainer: React.FC = (props) => {
  const [authState, setAuthState] = useState<EnumAuthState>(
    EnumAuthState.SIGN_IN
  );

  const handleSignIn = () => {
    setAuthState(EnumAuthState.SIGNED_IN);
  };

  const getAuthLayout = () => {
    switch (authState) {
      case EnumAuthState.SIGN_UP:
        return <SignUpLayout onStateChange={(e) => setAuthState(e)} />;
      default:
        return (
          <SignInLayout
            onStateChange={(e) => setAuthState(e)}
            onSignIn={handleSignIn}
          />
        );
    }
  };

  return (
    <div>
      {authState === EnumAuthState.SIGNED_IN ? (
        props.children
      ) : (
        <div className="flex items-center justify-center content-height">
          {getAuthLayout()}
        </div>
      )}
    </div>
  );
};
