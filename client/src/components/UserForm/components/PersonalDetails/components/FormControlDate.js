import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { setField } from "../../../../../store/UserForm/PersonalDetails/actions";

export const FormControlDate = () => {
  const { PersonalDetailsReducer } = useSelector(state => state);
  const { birthdayDate } = PersonalDetailsReducer;
  const dispatch = useDispatch();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        autoOk
        openTo="year"
        views={["year", "month", "date"]}
        variant="inline"
        inputVariant="outlined"
        label="Date of birth"
        format="dd/MM/yyyy"
        value={birthdayDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date =>
          dispatch(setField({ name: "birthdayDate", value: date }))
        }
      />
    </MuiPickersUtilsProvider>
  );
};
