import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "../../styles";

export const FormControlText = ({
  idName,
  labelName,
  fullWidth,
  type,
  value,
  onChange,
  errors
}) => {
  const classes = useStyles();
  return (
    <TextField
      // error={errors.length === 0 ? false : true}
      // helperText={errors}
      classes={{
        root: classes.credentialFieldItem
      }}
      fullWidth={fullWidth}
      required
      type={type}
      id={idName}
      label={labelName}
      variant="standard"
      value={value}
      onChange={onChange}
    />
  );
};
