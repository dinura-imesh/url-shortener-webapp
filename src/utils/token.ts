import { IAuthTokens } from "./../types/authTokens.type";
const authTokenKey = "Auth_Token";
const refreshTokenKey = "Refresh_Token";

export const setAuthTokens = (authToken: string, refreshToken: string) => {
  localStorage.setItem(authTokenKey, authToken);
  localStorage.setItem(refreshTokenKey, refreshToken);
};

export const hasAuthTokens = () => {
  return (
    localStorage.getItem(authTokenKey) && localStorage.getItem(refreshTokenKey)
  );
};

export const getAuthTokens = (): IAuthTokens => {
  return {
    authToken: localStorage.getItem(authTokenKey) as string,
    refreshToken: localStorage.getItem(refreshTokenKey) as string,
  };
};
