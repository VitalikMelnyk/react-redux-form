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
  handleResetStep,
  handleSubmitFormData,
  formTitle
}) => {
  const classes = useStyles();
  const { ContactDetailsReducer } = useSelector(state => state);
  const { telephoneNumber, address, city } = ContactDetailsReducer;
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
      <form action="">
        <div className={classes.formFields}>
          <SelectAutocompleteCountry />
          <div className={classes.credentialFields}>
            <FormControlText
              idName="city"
              value={city}
              onChange={handleChangeField("city")}
              fullWidth={true}
              labelName="City"
              type="text"
            />
            <FormControlText
              idName="telePhone"
              value={telephoneNumber}
              onChange={handleChangeField("telephoneNumber")}
              fullWidth={true}
              type="tel"
              labelName="Telephone Number"
            />
          </div>
          <FormControlText
            idName="address"
            value={address}
            onChange={handleChangeField("address")}
            fullWidth={true}
            labelName="Address"
            type="text"
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
            color="secondary"
            onClick={handleBackStep}
          >
            Back
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

export default ContactDetails;
