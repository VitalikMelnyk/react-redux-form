import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "../styles";

export const FormControlText = ({
  idName,
  labelName,
  fullWidth,
  type,
  value,
  onChange
}) => {
  const classes = useStyles();
  return (
    <TextField
      classes={{
        root: classes.credentialFieldItem
      }}
      fullWidth={fullWidth}
      required
      type={type}
      id={idName}
      label={labelName}
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};
