import React, { useState } from "react";

import { useStyles } from "./styles";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { FormControlText } from "./components/FormControlText";
import { FormControlSelect } from "./components/FormControlSelect";
import { FormControlDate } from "./components/FormControlDate";

const PersonalDetails = ({ handleNextStep, handleResetStep, formTitle }) => {
  const [name, setName] = useState("");
  const classes = useStyles();
  const handleChangeName = event => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <div>
      <Typography component="h2" variant="h4">
        {formTitle}
      </Typography>
      <form action="" className={classes.personalDetailsForm} >
        <div className={classes.credentialFields}>
          <FormControlText
            idName="firstName"
            value={name}
            onChange={handleChangeName}
            fullWidth={true}
            type="text"
            labelName="First Name"
          />
          <FormControlText
            idName="secondName"
            fullWidth={true}
            labelName="Second Name"
            type="text"
          />
        </div>
        <div className={classes.credentialFields}>
          <FormControlSelect />
          <FormControlDate />
        </div>
        <div className={classes.credentialFields}>
          <FormControlText
            idName="email"
            fullWidth={true}
            labelName="Email"
            type="email"
          />
          <FormControlText
            idName="password"
            fullWidth={true}
            labelName="Password"
            type="password"
          />
        </div>
        <ButtonGroup>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleResetStep}
          >
            Reset Steps
          </Button>

          <Button variant="outlined" color="primary" onClick={handleNextStep}>
            Next
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default PersonalDetails;
