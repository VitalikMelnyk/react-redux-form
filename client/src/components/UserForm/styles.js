import Picture from "../../assets/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#383a4f",
    fontWeight: "700",
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpContainer: {},
  signUpHeader: {
    margin: "40px  0 45px",
    textAlign: "center"
  },
  signUpMain: {
    background: "#525575",
    // border: "5px solid white",
    borderRadius: "30px",
    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)"
  },
  signUpTitle: {
    // fontFamily: "'Open Sans' sans-serif",
    fontSize: "35px",
    fontWeight: "700",
    textTransform: "capitalize",
    color: "white"
  },
  signUpSubtitle: {},
  signUpFormBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "10px",
    padding: "30px 10px 30px",
    borderRadius: "20px",
    minHeight: "450px",
    "& .MuiButtonGroup-root": {
      justifyContent: "space-between"
    }
  },
  DetailsForm: {
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
    },
    
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
    ".MuiInput-underline:before": {
      color: "#55e8d5"
    },
    "& .MuiFormLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "#55e8d5"
      }
    }
  },
  genderSelectItem: {
    margin: "10px"
  }
});
