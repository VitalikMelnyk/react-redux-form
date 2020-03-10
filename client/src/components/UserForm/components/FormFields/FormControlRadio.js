import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { radioItems } from "../../../../shared";
import { useStyles } from "../../styles";

export const FormControlRadio = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Payment Type</FormLabel>
      <RadioGroup
        aria-label="paymentType"
        name="paymentType"
        value={value}
        onChange={onChange}
      >
        {radioItems.map(item => (
          <FormControlLabel
            value={item.value}
            key={item.value}
            label={item.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
