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

const PersonalDetails = ({
  handleResetCurrentStep,
  handleSubmitFormData,
  formTitle
}) => {
  const classes = useStyles();
  const { PersonalDetailsReducer } = useSelector(state => state);
  const {
    firstName,
    secondName,
    email,
    password,
    errors
  } = PersonalDetailsReducer;
  const dispatch = useDispatch();
  const handleChangeField = name => event => {
    const value = event.target.value;
    const payload = { value, name };
    console.log(payload);

    dispatch(setPersonalField(payload));
  };
  return (
    <>
      <FormTitle formTitle={formTitle} />
      <form
        action=""
        className={classes.DetailsForm}
        onSubmit={handleSubmitFormData}
      >
        <div className={classes.credentialFields}>
          <FormControlText
            
            idName="firstName"
            errors={errors}
            value={firstName}
            onChange={handleChangeField("firstName")}
            fullWidth={true}
            type="text"
            labelName="First Name"
          />
          <FormControlText
            errors={errors}
            idName="secondName"
            value={secondName}
            onChange={handleChangeField("secondName")}
            fullWidth={true}
            labelName="Second Name"
            type="text"
          />
        </div>
        <div className={classes.credentialFields}>
          <FormControlSelect
            idName="gender"
            errors={errors}
            onChange={handleChangeField("gender")}
          />
          <FormControlDate />
        </div>
        <div className={classes.credentialFields}>
          <FormControlText
            errors={errors}
            idName="email"
            value={email}
            onChange={handleChangeField("email")}
            fullWidth={true}
            labelName="Email"
            type="email"
          />
          <FormControlText
            errors={errors}
            idName="password"
            value={password}
            onChange={handleChangeField("password")}
            fullWidth={true}
            labelName="Password"
            type="password"
          />
        </div>
      </form>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleResetCurrentStep}
        >
          Reset
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitFormData}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

export default PersonalDetails;
