import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

export const FormTitle = ({ formTitle }) => {
  const classes = useStyles();
  const { UserFormReducer } = useSelector(state => state);
  const { activeStep } = UserFormReducer;
  return (
    <div className={classes.formTitle}>
      <Typography variant="h5" color="textPrimary" component="h2">
        {formTitle}
      </Typography>
      <Typography variant="h5" component="p" color="textPrimary">
        {activeStep + 1} / 3
      </Typography>
    </div>
  );
};
