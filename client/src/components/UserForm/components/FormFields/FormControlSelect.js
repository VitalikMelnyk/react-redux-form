import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";
import { genderOptions } from "../../../../shared";
import { useStyles } from "./styles";

export const FormControlSelect = ({ onChange, errors, idName }) => {
  const classes = useStyles();
  const { PersonalDetailsReducer } = useSelector(state => state);
  const { gender } = PersonalDetailsReducer;
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <FormControl
      className={classes.genderLabel}
      error={errors[idName] ? true : false}
      required
      variant="standard"
      fullWidth
    >
      <InputLabel ref={inputLabel} id={idName}>
        Gender
      </InputLabel>
      <Select
        color="secondary"
        labelId={idName}
        id={idName}
        value={gender}
        onChange={onChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="" disabled>
          Select your gender
        </MenuItem>
        {genderOptions.map(item => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errors[idName]}</FormHelperText>
    </FormControl>
  );
};
