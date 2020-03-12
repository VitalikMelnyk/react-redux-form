import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { useStyles } from "./styles";

const Congratulation = ({ handleResetAllForm }) => {
  const classes = useStyles();
  return (
    <div className={classes.congratulationBox}>
      <h2>Congratulations!</h2>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleResetAllForm}
        >
          Reset Steps
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Congratulation;
