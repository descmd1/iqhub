import React, { useState } from 'react'
import classes from './Assessment.module.css'
import Layout from '../layout/Layout';

const SubmitAssignment = () => {

    const [file, setFile] = useState(null);
    const handleSubmit = (values) => {
        // Handle form submission here, e.g., send data to the server
        console.log(values);
      };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
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
      const formData = new FormData();
      formData.append('file', file);

  return (
    <Layout>
    <form  onSubmit={handleSubmit} className={classes.assessment_box}>
       <input type="file" accept="application/pdf" onChange={handleFileChange} /> 
       <button onClick={handleUpload}>Upload</button> 
    </form>
    </Layout>
  )
}

export default SubmitAssignment