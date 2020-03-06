import React, { useState, useEffect, useRef } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

export const FormControlSelect = () => {
  const [gender, setGender] = useState("");
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleChange = event => {
    setGender(event.target.value);
  };
  return (
    <FormControl required variant="outlined" fullWidth>
      <InputLabel ref={inputLabel} id="gender">
        Gender
      </InputLabel>
      <Select
        labelId="gender"
        id="gender"
        value={gender}
        onChange={handleChange}
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
