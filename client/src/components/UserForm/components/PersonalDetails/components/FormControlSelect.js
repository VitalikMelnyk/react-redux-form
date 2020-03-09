import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { setGenderName } from "../../../../../store/UserForm/PersonalDetails/actions";

export const FormControlSelect = ({ onChange }) => {
  const { PersonalDetailsReducer } = useSelector(state => state);
  const { gender } = PersonalDetailsReducer;
  const dispatch = useDispatch();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  // const handleChangeGenderName = event => {
  //   const genderName = event.target.value;
  //   dispatch(setGenderName(genderName));
  // };
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
