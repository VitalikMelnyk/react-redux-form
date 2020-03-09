import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { useStyles } from "./styles";
const Introduction = ({ handleNextStep }) => {
  const classes = useStyles();
  return (
    <div className={classes.introBox}>
      <ButtonGroup>
        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Let's Start
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Introduction;
