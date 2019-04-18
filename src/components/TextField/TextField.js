import * as React from "react";
import { Input, Form } from "antd";
import { Field } from "formik";
import "./TextField.css";
const TextField = ({ name, label, type }) => {
  return (
    <Field
      name={name}
      render={(props: any) => {
        const {
          form: { errors, touched }
        } = props;
        const showError = errors[name] && touched[name];
        console.log(touched);
        return (
          <Form.Item
            className="text-field"
            label={label}
            colon={false}
            validateStatus={showError ? "error" : ""}
            help={showError ? errors[name] : ""}
          >
            <Input type={type} {...props.field} />
          </Form.Item>
        );
      }}
    />
  );
};

export default TextField;
