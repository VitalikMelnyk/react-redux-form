import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  MuiThemeProvider,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core";

import UserForm from "./components/UserForm";
import { deepOrange, indigo } from "@material-ui/core/colors";
import { setThemeType } from "./store/UserForm/actions";

const App = () => {
  const { UserFormReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  const { themeType, checkedSwitch } = UserFormReducer;
  console.log(themeType);
  const theme = {
    palette: {
      type: `${themeType}`,
      primary: indigo,
      secondary: deepOrange
    }
  };
  const toggleTheme = () => {
    const newThemeType = themeType === "light" ? "dark" : "light";
    // const newChechedSwitch = !checkedSwitch;
    console.log(newThemeType);
    console.log(checkedSwitch);
    dispatch(setThemeType({ newThemeType, checkedSwitch }));
  };

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
