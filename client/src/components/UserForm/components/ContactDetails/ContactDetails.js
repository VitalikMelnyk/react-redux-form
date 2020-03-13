import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";
import { FormTitle } from "../GeneralComponents/FormTitle";
import { useStyles } from "../../styles";
import { setContactField } from "../../../../store/UserForm/ContactDetails/actions";
import { FormControlText } from "../FormFields";
import { SelectAutocompleteCountry } from "./components/SelectAutocompleteCountry";

const ContactDetails = ({
  handleNextStep,
  handleBackStep,
  handleResetCurrentStep,
  handleSubmitFormData,
  formTitle
}) => {
  const classes = useStyles();
  const { ContactDetailsReducer } = useSelector(state => state);
  const {
    telephoneNumber,
    address,
    city,
    zipCode,
    errors
  } = ContactDetailsReducer;
  const dispatch = useDispatch();

  const handleChangeField = name => event => {
    const value = event.target.value;
    const payload = { value, name };
    console.log(payload);
    dispatch(setContactField(payload));
  };
  return (
    <>
      <FormTitle formTitle={formTitle} />
      <form action="" className={classes.DetailsForm}>
        <div className={classes.credentialFields}>
          <FormControlText
            errors={errors}
            idName="city"
            value={city}
            onChange={handleChangeField("city")}
            fullWidth={true}
            labelName="City"
            type="text"
          />
          <FormControlText
            errors={errors}
            idName="telephoneNumber"
            value={telephoneNumber}
            onChange={handleChangeField("telephoneNumber")}
            fullWidth={true}
            type="tel"
            labelName="Telephone Number"
          />
        </div>
        <div className={classes.credentialFields}>
          <SelectAutocompleteCountry errors={errors} idName="country" />
        </div>
        <div className={classes.credentialFields}>
          <FormControlText
            errors={errors}
            idName="address"
            value={address}
            onChange={handleChangeField("address")}
            fullWidth={true}
            labelName="Address"
            type="text"
          />
          <FormControlText
            errors={errors}
            idName="zipCode"
            value={zipCode}
            onChange={handleChangeField("zipCode")}
            fullWidth={true}
            labelName="Zip Code"
            type="text"
          />
        </div>
      </form>
      <ButtonGroup>
        <ButtonGroup>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetCurrentStep}
          >
            Reset
          </Button>
          <Button variant="contained" color="primary" onClick={handleBackStep}>
            Back
          </Button>
        </ButtonGroup>

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

export default ContactDetails;
