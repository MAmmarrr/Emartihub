import React, { useState } from "react";
import BasicForm from './ModalSteps/Basic';
import PersonalForm from './ModalSteps/Personnel';
import ContactForm from './ModalSteps/Contact';
import PaymentForm from './ModalSteps/Skills/Payment';
import LinearProgressWithLabel from './HorizontalProgress'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Grid} from "@material-ui/core";
import {
  useForm,
  FormProvider,
} from "react-hook-form";

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Rrofessional Skill",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [profileInfo,setProfileInfo] = useState({})
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: [],
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = React.useState(27);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return !true;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    setProfileInfo(data)
    console.log(profileInfo)
    if (activeStep === steps.length - 1) {
      
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          
          setActiveStep(activeStep + 1);
          
        });
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress === 81 ? 100 : prevProgress + 27));
        
      } else {
        setActiveStep(activeStep + 1);
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 :prevProgress === 81 ? 100 : prevProgress + 27));


      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setProgress((prevProgress) => (prevProgress >= 100 ? 27 : prevProgress <= 100 ? 27 : prevProgress === 81 ? 100 : prevProgress + 27));

  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  
  return (
    <div> 
         <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
         
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index} >
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Grid container xs={12}>
              <Grid item xs={2}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              </Grid>
              <Grid xs={7}>

              </Grid>
              <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                justify="center"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Save & Continue"}
              </Button>    
              </Grid>          
              </Grid>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
