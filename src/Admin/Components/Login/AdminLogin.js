import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Adminlogin.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          <div className={classes.inputContainer}>
            <Field
             type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className={classes.login__email}
            />
             <span onClick={togglePasswordVisibility} className={classes.eyeIcon}>
              {showPassword ? <FiEye /> : <FiEyeOff /> } 
            </span>
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

export default AdminLogin;
