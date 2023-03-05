import { getAxios, postAxios } from "@/utils/axios.js";
export const login = (data) => {
  return postAxios({ url: "user/login", data });
};
