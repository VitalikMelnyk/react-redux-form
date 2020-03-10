import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const PaymentDetails = ({
  handleBackStep,
  handleResetStep,
  // handleSubmitFormData
}) => {
  return (
    <div>
      <ButtonGroup>
        <Button variant="contained" color="secondary" onClick={handleResetStep}>
          Reset Steps
        </Button>
        <Button variant="contained" color="secondary" onClick={handleBackStep}>
          Back
        </Button>

        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitFormData}
        >
          Next
        </Button> */}
      </ButtonGroup>
    </div>
  );
};

export default PaymentDetails;
