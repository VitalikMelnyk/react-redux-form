import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import StepperComponent from "./components/Stepper";
import { useStyles } from "./styles";
import PersonalDetails from "./components/PersonalDetails";
import ContactDetails from "./components/ContactDetails";
import OfficialDetails from "./components/OfficialDetails";
import PaymentDetails from "./components/PaymentDetails";
import Introduction from "./components/Introduction";
import {
  handleActiveStepNext,
  handleActiveStepBack,
  handleActiveStepReset
} from "../../store/UserForm/actions";

const UserForm = () => {
  const classes = useStyles();
  const { activeStep } = useSelector(state => {
    console.log(state);
    return state;
  });
  console.log(activeStep);
  const dispatch = useDispatch();
  const handleNextStep = () => {
    dispatch(handleActiveStepNext());
  };
  const handleBackStep = () => {
    dispatch(handleActiveStepBack());
  };
  const handleResetStep = () => {
    dispatch(handleActiveStepReset());
  };

  const getStepContent = () => {
    switch (activeStep) {
      case -1:
        return <Introduction handleNextStep={handleNextStep} />;
      case 0:
        return (
          <PersonalDetails
            formTitle="Personal Details:"
            handleNextStep={handleNextStep}
            handleResetStep={handleResetStep}
          />
        );
      case 1:
        return (
          <ContactDetails
            formTitle="Contact Details:"
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
            handleResetStep={handleResetStep}
          />
        );
      case 2:
        return <OfficialDetails />;
      case 3:
        return <PaymentDetails />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.picture}></Grid>
        <Grid item xs={12} sm={8} md={5} className={classes.signUpContainer}>
          <div className={classes.signUpHeader}>
            <Typography
              component="h1"
              variant="h4"
              className={classes.signUpTitle}
            >
              Sign up to FInancial
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              className={classes.signUpSubtitle}
            >
              Fill all form field to go next step
            </Typography>
          </div>
          <StepperComponent activeStep={activeStep} />
          <div className={classes.signUpFormBox}>{getStepContent()}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
