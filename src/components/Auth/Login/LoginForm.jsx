import Logo from "../../UI/Logo";
import { handelLogin } from "../../../http/post/auth/authAPIs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const token = await handelLogin({
      email: values.email,
      password: values.password,
    });
    if (token) {
      navigate("/");
    } else alert("Something went wrong");
    setLoading(false);
  };

  return (
    <>
      <Logo className="mt-4" />
      <Form form={form} className="w-80 m-auto" onFinish={onFinish} layout="vertical">
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Enter password"
            iconRender={(visible) => (visible ? <UnlockOutlined /> : <LockOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="mt-2 w-full" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;
