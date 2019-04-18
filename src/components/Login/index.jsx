import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import TextField from "../TextField";
import "./Login.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
      "Password is invalid"
    )
    .required()
});

const Login = props => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        // same shape as initial values
        props.handleLogin(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="login-form">
          <TextField name="email" label="Email" />
          <TextField name="password" type="password" label="Password" />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
