import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { countriesList } from "../../../../../shared/countriesList";
import { setContactField } from "../../../../../store/UserForm/ContactDetails/actions";
export const SelectAutocompleteCountry = () => {
  const { ContactDetailsReducer } = useSelector(state => state);
  const { country } = ContactDetailsReducer;
  const dispatch = useDispatch();
  console.log("country: ", country);
  const handleChangeField = name => (event, value) => {
    const payload = { value, name };
    console.log(payload);
    dispatch(setContactField(payload));
  };

  return (
    <Autocomplete
      //   freeSolo
      id="selectCountry"
      autoComplete={true}
      style={{ width: 300 }}
      options={countriesList}
      autoHighlight
      value={country}
      onChange={handleChangeField("country")}
      getOptionLabel={option => option.label}
      renderOption={option => (
        <>
          {option.label} ({option.code})
        </>
      )}
      renderInput={params => (
        <TextField
          required
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
  );
};
