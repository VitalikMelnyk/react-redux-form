import Picture from "../../assets/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#424242",
    color: "white",
    justifyContent: "center",
    alignItems: 'center'
  },
  picture: {
    background: `url(${Picture}) center no-repeat`,
    backgroundSize: "cover"
  },
  signUpContainer: {
    
  },
  signUpHeader: {
    margin: "45px 45px 0",
    textAlign: "center"
  },
  signUpTitle: {
    textTransform: "capitalize",
    color: "white"
  },
  signUpSubtitle: {},
  signUpFormBox: {
    margin: "10px",
    padding: "30px 10px 30px",
    border: "3px solid black",
    borderRadius: "20px",
    minHeight: "fit-content"
  },
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
  formFields: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiFormControl-root": {
      margin: "10px 5px 20px"
    },
    "& .MuiFormGroup-root": {
      flexDirection: "row",
      justifyContent: "center"
    },
    "& .MuiFormLabel-root": {
      textAlign: "center",
      fontWeight: "700"
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
