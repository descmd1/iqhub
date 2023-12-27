import React, { useState } from "react";
import classes from './Assessment.module.css'
import Layout from "../layout/Layout";

const Assessment = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, step1Data: e.target.value });
  };

  return (
    <div className={classes.assessment__container}>
      <h2>Assigment</h2>
      <form className={classes.assessment_box}> 
      <input
        type="text"
        value={formData.step1Data}
        onChange={handleChange}
        placeholder="Enter course title"
        className={classes.__inputs}
      />
      <input
        type="text"
        value={formData.step1Data}
        onChange={handleChange}
        placeholder="Enter question"
        className={classes.__inputs}
      />
      <button onClick={nextStep} className={classes.assBtn}>Next</button>
      </form>
    </div>
  );
};

const Preview = ({ formData, setFormData, prevStep, submit }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, step2Data: e.target.value });
  };

  return (
    <div className={classes.preview__container}>
      <p>Assignment preview</p>
      <p>course title: {formData.coursetitle}</p>
      <p>question: {formData.question}</p>
      <div className={classes.previewBtn_box}>
      <button onClick={prevStep}  className={classes.assBtn}>Previous</button>
      <button onClick={submit}  className={classes.assBtn}>Submit</button>
      </div>
    </div>
  );
};

const AssessmentForm = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 2; // Total number of steps

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submit = () => {
    // Handle form submission here
    console.log("Form data:", formData);
  };

  return (
    <Layout>
    <div className={classes.assessment__form}>
      {currentStep === 1 && (
        <Assessment formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <Preview formData={formData} setFormData={setFormData} prevStep={prevStep} submit={submit} />
      )}
    </div>
    </Layout>
  );
};

export default AssessmentForm;