import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../../styles";
import { Button, ButtonGroup } from "@material-ui/core";
import {
  FormControlDate,
  FormControlSelect,
  FormControlText
} from "../FormFields";
import { setPersonalField } from "../../../../store/UserForm/PersonalDetails/actions";
import { FormTitle } from "../GeneralComponents/FormTitle";
import { addDataToAllInformation } from "../../../../store/UserForm/actions";

const PersonalDetails = ({
  handleNextStep,
  handleResetStep,
  handleSubmitFormData,
  formTitle
}) => {
  const classes = useStyles();
  const { PersonalDetailsReducer } = useSelector(state => state);
  const { firstName, secondName, email, password } = PersonalDetailsReducer;
  const dispatch = useDispatch();

  const handleChangeField = name => event => {
    const value = event.target.value;
    const payload = { value, name };
    console.log(payload);
    dispatch(setPersonalField(payload));
  };
  const handleSubmitPersonalDetails = event => {
    event.preventDefault();
    dispatch(addDataToAllInformation(PersonalDetailsReducer));
    handleNextStep();
  };
  return (
    <>
      <FormTitle formTitle={formTitle} />
      <form
        action=""
        className={classes.personalDetailsForm}
        onSubmit={handleSubmitFormData}
      >
        <div className={classes.credentialFields}>
          <FormControlText
            idName="firstName"
            value={firstName}
            onChange={handleChangeField("firstName")}
            fullWidth={true}
            type="text"
            labelName="First Name"
          />
          <FormControlText
            idName="secondName"
            value={secondName}
            onChange={handleChangeField("secondName")}
            fullWidth={true}
            labelName="Second Name"
            type="text"
          />
        </div>
        <div className={classes.credentialFields}>
          <FormControlSelect onChange={handleChangeField("gender")} />
          <FormControlDate />
        </div>
        <div className={classes.credentialFields}>
          <FormControlText
            idName="email"
            value={email}
            onChange={handleChangeField("email")}
            fullWidth={true}
            labelName="Email"
            type="email"
          />
          <FormControlText
            idName="password"
            value={password}
            onChange={handleChangeField("password")}
            fullWidth={true}
            labelName="Password"
            type="password"
          />
        </div>
        <ButtonGroup>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetStep}
          >
            Reset Steps
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitFormData}
          >
            Next
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default PersonalDetails;
