"use client";
import "./globals.css";
import DropDown from "../components/dropDownList/dropDown";
function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <DropDown />
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
