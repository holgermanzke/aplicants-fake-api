import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  height: 60px;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Mono", monospace;
  font-size: 1.8rem;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  height: 60px;
`;

function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <GlobalStyles />
      <Router>
        <Container>
          <Header>Applicants DB</Header>
          <Main>
            <Switch>
              <Route exact path="/">
                <div>Applicants</div>
              </Route>
              <Route exact path="/new">
                <div>Add</div>
              </Route>
            </Switch>
          </Main>
          <Footer>
            <BottomNavigation />
          </Footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
