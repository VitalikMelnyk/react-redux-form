import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import StepperComponent from "./components/Stepper";
import { useStyles } from "./styles";
import PersonalDetails from "./components/PersonalDetails";
import ContactDetails from "./components/ContactDetails";
import PaymentDetails from "./components/PaymentDetails";
import Introduction from "./components/Introduction";
import {
  handleActiveStepNext,
  handleActiveStepBack,
  handleActiveStepReset,
  addDataToAllInformation
} from "../../store/UserForm/actions";

const UserForm = () => {
  const classes = useStyles();
  const {
    UserFormReducer,
    PersonalDetailsReducer,
    ContactDetailsReducer
  } = useSelector(state => state);
  const { activeStep } = UserFormReducer;
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

  const handleSubmitDataToAllInformation = nameOfReducer => event => {
    event.preventDefault();
    dispatch(addDataToAllInformation(nameOfReducer));
    handleNextStep();
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
            handleSubmitFormData={handleSubmitDataToAllInformation(
              PersonalDetailsReducer
            )}
          />
        );
      case 1:
        return (
          <ContactDetails
            formTitle="Contact Details:"
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
            handleResetStep={handleResetStep}
            handleSubmitFormData={handleSubmitDataToAllInformation(
              ContactDetailsReducer
            )}
          />
        );
      case 2:
        return (
          <PaymentDetails
            handleBackStep={handleBackStep}
            handleResetStep={handleResetStep}
          />
        );
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
