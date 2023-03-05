'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

function HomePage() {

  const [value, setValue] = useState('**Hello world!!!**\n\n123213\n\n21321321\n\n![](http://localhost:3000/blogPic/1.jpg)\n\n\n\n-\n\n-  \n\n-  ');
  return (
    <div>
        {/* hideToolbar="true" 隐藏工具栏 
          * preview='live' | 'edit' | 'preview' 显示两/编辑栏/预览栏
          */}
      <MDEditor  height="700" value={value} onChange={setValue} />
    </div>
  );
}

export default HomePage;