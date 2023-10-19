import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Signup.module.css";
import Header from "../header/Header";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("first name is required"),
  lastname: Yup.string().required("last name is required"),
  phone: Yup.number().required("phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("please confirm password"),
});

const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log(values);
  };

  return (
    <Fragment className={classes.login__container}>
      {/* <Header /> */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={classes.login__container}>
          <p className={classes.login__para}>Register</p>
          <div>
            <Field
              type="firstname"
              id="firstname"
              name="firstname"
              placeholder="Enter first name"
              className={classes.login__email}
            />
            <ErrorMessage
              name="firstname"
              component="div"
              className={classes.error__message}
            />
          </div>
          <div>
            <Field
              type="lastname"
              id="lastname"
              name="lastname"
              placeholder="Enter last name"
              className={classes.login__email}
            />
            <ErrorMessage
              name="last name"
              component="div"
              className={classes.error__message}
            />
          </div>
          <div>
            <Field
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter mobile number"
              className={classes.login__email}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={classes.error__message}
            />
          </div>
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
          <div>
            <Field
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassworf"
              placeholder="Confirm password"
              className={classes.login__email}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={classes.error__message}
            />
          </div>
          <button type="submit" className={classes.login__button}>
            Register
          </button>
          <button className={classes.login__account}>
            Already have account? Login
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default SignUp;
