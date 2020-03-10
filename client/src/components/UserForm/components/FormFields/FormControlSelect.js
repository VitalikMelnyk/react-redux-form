import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

export const FormControlSelect = ({ onChange }) => {
  const { PersonalDetailsReducer } = useSelector(state => state);
  const { gender } = PersonalDetailsReducer;
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <FormControl required variant="outlined" fullWidth>
      <InputLabel ref={inputLabel} id="gender">
        Gender
      </InputLabel>
      <Select
        labelId="gender"
        id="gender"
        value={gender}
        onChange={onChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="" disabled>
          <em>Select your gender</em>
        </MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
  );
};
