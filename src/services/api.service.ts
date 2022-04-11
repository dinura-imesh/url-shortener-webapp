import { http } from "../http";

const serviceUrl = "api/";

export const getApiKey = async () => {
  return await http.withToken.get(`${serviceUrl}`);
};
