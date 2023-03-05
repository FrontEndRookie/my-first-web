"use client";
import { useState, useEffect } from "react";
import Jump from "./jump";
const Login = () => {
  let [loginName, setName] = useState("");
  let [loginPsd, setPsd] = useState("");
  return (
    <>
      <div className="loginBox">
        <div className="box">
          <div className="clover"></div>
          <div className="clover"></div>
          <div className="clover"></div>
          <div className="clover"></div>
        </div>
        <div className="form-box">
          <div className="login-box">
            <h1 className="title">Sign in</h1>
            <div className="img-box">
              <img src="/userImg/keli.webp" alt="" />
            </div>
            <div className="input-box">
              <input
                className="loginInput"
                type="text"
                placeholder="用户名"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="loginInput"
                type="password"
                placeholder="密码"
                onChange={(e) => setPsd(e.target.value)}
              />
            </div>
            <div className="btn-box">
              <Jump loginName={loginName} loginPsd={loginPsd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
