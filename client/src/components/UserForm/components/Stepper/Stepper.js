import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { ColorlibStepIcon } from "./ColorlibStepIcon";
import { useStyles, ColorlibConnector } from "./styles";

const getSteps = () => {
  return ["Personal", "Contact", "Payment"];
};
const StepperComponent = ({ activeStep }) => {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <Stepper
      className={classes.stepper}
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
