import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>APP</div>
          </Route>
          <Route exact path="/new">
            <div>New</div>
          </Route>
        </Switch>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;
