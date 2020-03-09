import React from "react";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
const ContactDetails = ({
  handleNextStep,
  handleBackStep,
  handleResetStep,
  formTitle
}) => {
  return (
    <div>
      <Typography component="h2" variant="h4">
        {formTitle}
      </Typography>
      <ButtonGroup>
        <Button variant="contained" color="secondary" onClick={handleResetStep}>
          Reset Steps
        </Button>
        <Button variant="contained" color="secondary" onClick={handleBackStep}>
          Back
        </Button>

        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ContactDetails;
