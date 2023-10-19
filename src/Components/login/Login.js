import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./login.module.css";
import Header from "../header/Header";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log(values);
  };

  return (
    <Fragment className={classes.container}>
      {/* <Header /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={classes.login__container}>
          <p className={classes.login__para}>Login</p>
          <div>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className={classes.login__email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={classes.error__message}
            />
          </div>
          <div>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className={classes.login__email}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={classes.error__message}
            />
          </div>
          <button type="submit" className={classes.login__button}>
            Login
          </button>
          <button className={classes.login__account}>
            Don't have account? register
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default Login;
