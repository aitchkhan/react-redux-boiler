import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line
import { Button, Layout, Divider, Row, Col } from "antd";
import TextField from "../TextField/TextField";
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
    .required("Required")
});

const Login = () => (
  // style={{height: "100vh"}}
  <div className="" >
    <Row type="flex" justify="center">
    <Col></Col>
      <Col >
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
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


      </Col>
    </Row>
  </div>

);

export default Login;
