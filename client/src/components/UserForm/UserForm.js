import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
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
import { validateSchema } from "../../utils/validate";
import { setPersonalErrors } from "../../store/UserForm/PersonalDetails/actions";
import { setContactErrors } from "../../store/UserForm/ContactDetails/actions";
import { setPaymentErrors } from "../../store/UserForm/PaymentDetails/actions";
import Congratulation from "./components/Congratulation";

const UserForm = () => {
  const classes = useStyles();
  const {
    UserFormReducer,
    PersonalDetailsReducer,
    ContactDetailsReducer,
    PaymentDetailsReducer
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
    console.log(nameOfReducer);
    const errors = validateSchema(nameOfReducer);
    console.log(errors);
    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length) {
      switch (nameOfReducer) {
        case PersonalDetailsReducer:
          dispatch(setPersonalErrors(errors));
          break;
        case ContactDetailsReducer:
          dispatch(setContactErrors(errors));
          break;
        case PaymentDetailsReducer:
          dispatch(setPaymentErrors(errors));
          break;
        default:
          break;
      }
    } else {
      switch (nameOfReducer) {
        case PersonalDetailsReducer:
          dispatch(addDataToAllInformation(nameOfReducer));
          handleNextStep();
          break;
        case ContactDetailsReducer:
          dispatch(addDataToAllInformation(nameOfReducer));
          handleNextStep();
          break;
        case PaymentDetailsReducer:
          dispatch(addDataToAllInformation(nameOfReducer));
          alert(JSON.stringify(UserFormReducer, null, 4));
          handleNextStep();
          break;
        default:
          break;
      }
    }
  };

  // const sendDataToBackend = nameOfReducer => event => {
  //   event.preventDefault();
  //   console.log(nameOfReducer);
  //   const errors = validateSchema(nameOfReducer);
  //   console.log(errors);
  //   console.log(Object.keys(errors).length);
  //   if (Object.keys(errors).length) {
  //     switch (nameOfReducer) {
  //       default:
  //         break;
  //     }
  //   } else {
  //     dispatch(addDataToAllInformation(nameOfReducer));
  //     alert(JSON.stringify(UserFormReducer, null, 4));
  //   }
  // };

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
            formTitle="Payment Details:"
            handleBackStep={handleBackStep}
            handleResetStep={handleResetStep}
            handleSubmit={handleSubmitDataToAllInformation(
              PaymentDetailsReducer
            )}
          />
        );
      case 3:
        return <Congratulation />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} md={5} className={classes.signUpContainer}>
          <div className={classes.signUpHeader}>
            <h1 className={classes.signUpTitle}>Sign up to Financial</h1>
          </div>
          <div className={classes.signUpMain}>
            <StepperComponent activeStep={activeStep} />
            <div className={classes.signUpFormBox}>{getStepContent()}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
