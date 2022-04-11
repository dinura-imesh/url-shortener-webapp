import { http } from "../http";

const serviceUrl = "user/";

export const getUser = async () => {
  return await http.withToken.get(serviceUrl);
};
