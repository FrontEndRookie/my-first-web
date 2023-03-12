'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button, Modal, Form, Input, message } from 'antd';
import { upload } from '../../api/index.js'
const { TextArea } = Input;
import 'md-editor-rt/lib/style.css';
const MDEditor = dynamic(
  () => import("md-editor-rt"),
  { ssr: false }
);

function HomePage() {

  const [value, setValue] = useState(` - 1、[下载tengine安装包](http://tengine.taobao.org/download.html) 假定下载文件为tengine-2.3.3.tar.gz 

  - 2、上传安装包到服务器目录
  
  - 3、解压文件 执行 tar zxvf tengine-2.3.3.tar.gz 
  
  - 4、进入解压目录  cd ./tengine-2.3.3
  
  - 5、执行配置检查命令 ./configure
  
  - 6、出现错误 ./configure: error: the HTTP rewrite module requires the PCRE library.
  - 原因缺少 PCRE 库文件  
  - 安装pcre-devel解决问题 yum -y install pcre-devel
  
  - 7、继续执行配置检查命令./configure 
  - 出现错误./configure: error: SSL modules require the OpenSSL library.
  - 原因缺少OpenSSL库文件
  - 安装openssl-devel解决问题yum -y install openssl openssl-devel（版本不同可能存在其他错误，百度均可解决，直到./configure不再报错）
  
  - 8、执行编译安装命令 make && make install
  
  - 9、执行启动命令./nginx
  
  - 10、云服务安装组开放80端口
  
  - 11、浏览器访问http://ip 出现welcome to tengine！
  `);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = async (values) => {
    const data = await upload({...values,detail:value})
    if(data.code == 200) {
      message.success(data.data.msg)
      handleCancel()
    } else {
      message.error(data.data)
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
        {/* hideToolbar="true" 隐藏工具栏 
          * preview='live' | 'edit' | 'preview' 显示两/编辑栏/预览栏
          */}
      <MDEditor modelValue={value} onChange={setValue}/>
      <Button type="primary" ghost style={{marginTop:'10px'}} onClick={showModal}>
        Upload
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="title"
        label="title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="label"
        label="label"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="describe" name="describe" rules={[
          {
            required: true,
          },
        ]}>
          <TextArea rows={4} />
        </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset} style={{marginLeft:'10px'}}>
          Reset
        </Button>
       
      </Form.Item>
    </Form>
      </Modal>
    </div>
  );
}

export default HomePage;