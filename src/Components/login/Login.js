import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./login.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../utils/Auth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ user, setUser ] = useState('')
const auth =  useAuth()
const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
   navigate('/dashboard')
  };
console.log ('errors')
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
         <Link to='/signup'> <button className={classes.login__account}>
            Don't have account? register
          </button></Link>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default Login;
