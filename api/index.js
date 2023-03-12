import { getAxios, postAxios } from "@/utils/axios.js";
export const login = (data) => {
  return postAxios({ url: "user/login", data });
};
export const techList = (data) => {
  return getAxios({ url: "tech/list" });
};
export const upload = (data) => {
  return postAxios({
    url: "tech/upload",
    data,
  });
};
