import { IAuthTokens } from "./../types/authTokens.type";
import { getAuthTokens } from "./../utils/token";
import { http } from "../http";

const serviceUrl = "auth/";

export const signIn = async (email: string, password: string) => {
  return await http.post(`${serviceUrl}signin`, {
    email: email,
    password: password,
  });
};

export const signUp = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  return await http.post(`${serviceUrl}signup`, {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
};

export const refreshTokens = async (refreshToken: string) => {
  const response = await http.post(`${serviceUrl}refresh`, {
    refreshToken: getAuthTokens().refreshToken,
  });
  return response.data as IAuthTokens;
};
