import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import Logo from "../../UI/Logo";
import { handelRegister } from "../../../http/post/auth/authAPIs";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const token = await handelRegister({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.confirmPassword,
    });
    if (token) {
      navigate("/");
    } else alert("Something went wrong");
  };

  const onPasswordChange = () => {
    const password = form.getFieldValue("password");
    const confirmPassword = form.getFieldValue("confirmPassword");
    form.setFields([
      {
        name: "confirmPassword",
        errors: password === confirmPassword ? [] : ["Password mismatched"],
      },
    ]);
  };

  return (
    <>
      <Logo className="mt-4" />
      <Form form={form} className="w-80 m-auto" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="John" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Doe" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
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
            onChange={onPasswordChange}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Enter password again"
            iconRender={(visible) => (visible ? <UnlockOutlined /> : <LockOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignupForm;
