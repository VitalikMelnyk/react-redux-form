import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core";
import UserForm from "./components/UserForm";
import { setThemeType } from "./store/UserForm/actions";
import { createTheme } from "./theme/config";

const App = () => {
  const { UserFormReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  const { themeType, checkedSwitch } = UserFormReducer;
  console.log(themeType);
  const toggleTheme = () => {
    const newThemeType = themeType === "light" ? "dark" : "light";
    dispatch(setThemeType({ newThemeType, checkedSwitch }));
  };
  const theme = createTheme(themeType);
  const muiTheme = createMuiTheme(theme);
  console.log(muiTheme);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <UserForm
          checkedSwitch={checkedSwitch}
          toggleTheme={toggleTheme}
          theme={themeType}
        />
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
