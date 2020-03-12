import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

export const FormTitle = ({ formTitle }) => {
  const classes = useStyles();
  const { UserFormReducer } = useSelector(state => state);
  const { activeStep } = UserFormReducer;
  return (
    <div className={classes.formTitle}>
      <h2>{formTitle}</h2>
      <p>{activeStep + 1} / 3</p>
    </div>
  );
};
