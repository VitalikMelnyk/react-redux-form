import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

export const FormTitle = ({ formTitle }) => {
  const classes = useStyles();
  const { UserFormReducer } = useSelector(state => state);
  const { activeStep } = UserFormReducer;
  return (
    <div className={classes.formTitle}>
      {/* <Typography component="h2" variant="h4" className="text-center">
        {formTitle}
      </Typography>
      <Typography component="p" variant="h4">
        {activeStep + 1} / 3
      </Typography> */}
      <h2>{formTitle}</h2>
      <p>{activeStep + 1} / 3</p>
    </div>
  );
};
