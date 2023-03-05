"use client";
import { message } from "antd";
import { login } from "@/api/index.js";
import { useRouter } from "next/navigation";

const Jump = (props) => {
  const router = useRouter();
  const countLogin = async () => {
    const { loginName, loginPsd } = props;
    if (!loginName || !loginPsd) return message.warning("请输入账号密码");
    const { code, data } = await login({
      email: props.loginName,
      password: props.loginPsd,
    });
    if (code == 200) {
      sessionStorage.setItem("user", JSON.stringify(data));
      document.getElementById("setLogin").click();
      document.cookie += ";login=true";
      router.push("/");
      message.success("登录成功");
    } else {
      message.error(data.msg);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          countLogin();
        }}
      >
        登录
      </button>
    </>
  );
};
export default Jump;
