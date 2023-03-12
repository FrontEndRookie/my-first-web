import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "上线的地址";
} else {
  baseURL = "http://localhost:3001/api/";
}

// 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.resolve(error.response);
  }
);
axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/vnd.dpexpo.v1+json";
    config.headers["Authorization"] =
      "Bearer " + JSON.parse(sessionStorage.getItem("user"))?.token;
    config.baseURL = baseURL;
    config.timeout = 10000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios的get请求
export function getAxios({ url, params = {} }) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// axios的post请求
export function postAxios({ url, data }) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "post",
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });
}

export default axios;
