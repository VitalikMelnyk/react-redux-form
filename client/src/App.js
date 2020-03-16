import React from "react";
import { useSelector } from "react-redux";
import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core";
import { I18nextProvider } from "react-i18next";
import { createTheme } from "./theme/config";
import UserForm from "./components/UserForm";
import i18n from "./shared/i18n";

const App = () => {
  const { ThemeReducer } = useSelector(state => state);
  const { themeType } = ThemeReducer;
  const theme = createTheme(themeType);
  const muiTheme = createMuiTheme(theme);
  console.log(muiTheme);
  console.log(i18n);
  return (
    <StylesProvider injectFirst>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={muiTheme}>
          <UserForm />
        </MuiThemeProvider>
      </I18nextProvider>
    </StylesProvider>
  );
};

export default App;
