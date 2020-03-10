import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { FormTitle } from "../GeneralComponents/FormTitle";
import { useStyles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { FormControlText } from "../FormFields";
import { setPaymentField } from "../../../../store/UserForm/PaymentDetails/actions";
import { FormControlRadio } from "../FormFields/FormControlRadio";

const PaymentDetails = ({
  formTitle,
  handleBackStep,
  handleResetStep,
  handleSubmit
}) => {
  const classes = useStyles();
  const { PaymentDetailsReducer } = useSelector(state => state);
  const {
    bankName,
    holderName,
    paymentType,
    cardNumber,
    cvcCode
  } = PaymentDetailsReducer;
  const dispatch = useDispatch();

  const handleChangeField = name => event => {
    const value = event.target.value;
    const payload = { value, name };
    console.log(payload);
    dispatch(setPaymentField(payload));
  };
  return (
    <>
      <FormTitle formTitle={formTitle} />
      <form action="" onSubmit={handleSubmit}>
        <div className={classes.credentialFields}>
          <FormControlText
            idName="bankName"
            value={bankName}
            onChange={handleChangeField("bankName")}
            fullWidth={true}
            labelName="Bank Name"
            type="text"
          />
          <FormControlText
            idName="holderName"
            value={holderName}
            onChange={handleChangeField("holderName")}
            fullWidth={true}
            labelName="Holder Name"
            type="text"
          />
        </div>
        <div className={classes.formFields}>
          <FormControlRadio
            value={paymentType}
            onChange={handleChangeField("paymentType")}
          />
        </div>
        <div className={classes.credentialFields}>
          <FormControlText
            idName="cardNumber"
            value={cardNumber}
            onChange={handleChangeField("cardNumber")}
            fullWidth={true}
            labelName="Card Number"
            type="password"
          />
          <FormControlText
            idName="cvcCode"
            value={cvcCode}
            onChange={handleChangeField("cvcCode")}
            fullWidth={true}
            labelName="CVC"
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
            color="secondary"
            onClick={handleBackStep}
          >
            Back
          </Button>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default PaymentDetails;
