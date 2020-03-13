import React from "react";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const Congratulation = ({ handleResetAllForm }) => {
  const classes = useStyles();
  return (
    <div className={classes.congratulationBox}>
      <Typography component="h2" variant="h5" color="textPrimary">
        Congratulations!
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetAllForm}
        >
          Reset Steps
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Congratulation;
