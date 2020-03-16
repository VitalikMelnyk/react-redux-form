import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    background: theme.palette.background.default,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpContainer: {},
  signUpHeader: {
    margin: "40px 0 45px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTypography-root.MuiFormControlLabel-label": {
      color: theme.palette.text.primary
    }
  },
  signUpMain: {
    background: theme.palette.background.signupForm,
    borderRadius: "30px",
    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)"
  },
  signUpTitle: {
    fontSize: "35px",
    fontWeight: "700",
    // textTransform: "capitalize"
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
    }
  },
  genderSelectItem: {
    margin: "10px"
  },
  switchThemeToggle: {
    "& .MuiTypography-root.MuiFormControlLabel-label": {
      color: theme.palette.text.primary
    }
  },
  paymentType: {
    "& .MuiTypography-root.MuiFormControlLabel-label": {
      color: theme.palette.text.primary
    }
  },
  selectLanguage: {
    "& .MuiTypography-root.MuiFormControlLabel-label": {
      color: theme.palette.text.primary
    }
  },
  btn: {
    "& .MuiButton-root": {
      marginRight: "15px"
    }
  }
}));
