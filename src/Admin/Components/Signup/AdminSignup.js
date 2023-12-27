import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./AdminSignup.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

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

const AdminSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
  const initialValues = {
    firstname: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    status: "",
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
          <div>
            <Field
                 type="text"
              id="status"
              name="status"
              placeholder="set status (e.g Tutor)"
              className={classes.login__email}
            />
            {/* <span onClick={toggleConfirmPasswordVisibility} className={classes.eyeIcon}>
              {showConfirmPassword ? <FiEye /> : <FiEyeOff /> } 
            </span>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={classes.error__message}
            /> */}
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

export default AdminSignUp;
