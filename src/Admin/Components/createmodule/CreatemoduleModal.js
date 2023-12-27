import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "../Login/Adminlogin.module.css"
import AdminLayout from '../../AdminLayout/AdminLayout'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const CreatemoduleModal = () => {

  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log(values);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleVideoChange = (event) => {
    const selectedVideo = event.target.files[0];
    setVideo(selectedVideo);
  };

  const handleUpload = () => {
    if (!file) {
      console.error('No file selected');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    // Replace '/api/upload' with the actual URL of your backend API
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('File uploaded successfully');
          // Handle success, e.g., show a success message to the user
        } else {
          console.error('File upload failed');
          // Handle failure, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user
      });
  };
  return (
    <AdminLayout>
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
              type="text"
              id="week"
              name="week"
              placeholder="Enter week"
              className={classes.login__email}
            />
            {/* <ErrorMessage
              name="email"
              component="div"
              className={classes.error__message}
            /> */}
          </div>
          <div>
            <Field
              type="text"
              id="moduletitle"
              name="moduletitle"
              placeholder="Enter module title"
              className={classes.login__email}
            />
            {/* <ErrorMessage
              name="password"
              component="div"
              className={classes.error__message}
            /> */}
          </div>
          <div>
            <Field
              type="text"
              id="titme"
              name="time"
              placeholder="Enter duration (in hours)"
              className={classes.login__email}
            />
            {/* <ErrorMessage
              name="password"
              component="div"
              className={classes.error__message}
            /> */}
          </div>
          <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
        </Form>
      </Formik>
    </Fragment>
    </AdminLayout>
  );
};

export default CreatemoduleModal;
