import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  personalDetailsForm: {
    padding: "20px 0"
  },
  credentialFields: {
    display: "flex",
    justifyContent: "space-around",
    "& .MuiFormControl-root": {
      margin: "10px"
    }
  },
  credentialFieldItem: {
    margin: "0 5px 0 10px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#787979",
        borderWidth: "2px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
        borderWidth: "2px"
      }
    },
    "& .MuiFormLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "green"
      }
    }
  },
  genderSelectItem: {
    margin: "10px"
  }
});
