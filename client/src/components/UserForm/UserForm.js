import React, { useState } from "react";
import clsx from "clsx";
import Picture from "../../assets/background.jpg";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Grid,
  Button
} from "@material-ui/core";
import { Settings, GroupAdd, VideoLabel, AccountBox } from "@material-ui/icons";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

const ColorlibStepIcon = props => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: <Settings />,
    2: <GroupAdd />,
    3: <VideoLabel />,
    4: <AccountBox />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#424242"
  },
  picture: {
    background: `url(${Picture}) center no-repeat`,
    backgroundSize: "cover"
  },
  signUpContainer: {},
  signUpTitle: {
    textTransform: "capitalize"
  },
  signUpSubtitle: {},
  stepper: {
    background: "transparent"
  }
});

const getSteps = () => {
  return ["Personal", "Contact", "Official", "Payment"];
};

const getStepContent = step => {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
};

const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.picture}></Grid>
        <Grid item xs={12} sm={8} md={5} className={classes.signUpContainer}>
          <div className={classes.signUpHeader}>
            <Typography
              component="h1"
              variant="h4"
              className={classes.signUpTitle}
            >
              Sign up to FInancial
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              className={classes.signUpSubtitle}
            >
              Fill all form field to go next step
            </Typography>
          </div>
          <Stepper
            className={classes.stepper}
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Button variant="outlined" color="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="outlined" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
