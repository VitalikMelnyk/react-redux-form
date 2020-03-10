import React from "react";
import { Typography } from "@material-ui/core";

export const FormTitle = ({ formTitle }) => {
  return (
    <Typography component="h2" variant="h4" className="text-center">
      {formTitle}
    </Typography>
  );
};
