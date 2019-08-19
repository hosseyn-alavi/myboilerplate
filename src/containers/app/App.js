import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { jssPreset } from "@material-ui/styles";
import JssProvider from "react-jss/lib/JssProvider";
import rtl from "jss-rtl";
import { create } from "jss";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import Router from "../../components/routes";
import Snack from "../../components/snackbar"

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    secondary: {
      main: "#F06292"
    },
    primary: {
      main: "#26C6DA"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"IRANSans"', "IRANSans"].join(",")
  }
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssProvider jss={jss}>
          <div className="App">
            <MuiThemeProvider theme={theme}>
              <Router />
              <Snack />
            </MuiThemeProvider>
          </div>
        </JssProvider>
      </Provider>
    );
  }
}
