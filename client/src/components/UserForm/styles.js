import Picture from "../../assets/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#424242",
    color: "white"
  },
  picture: {
    background: `url(${Picture}) center no-repeat`,
    backgroundSize: "cover"
  },
  signUpContainer: {},
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
    // border: "1px solid black",
    minHeight: "fit-content"
  }
});
