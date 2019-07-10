import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import { StylesProvider } from '@material-ui/styles';

import LandingPage from 'Pages/LandingPage/LandingPage';
import HomePage from 'Pages/HomePage/HomePage';

const Routes = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </StylesProvider>
    </ThemeProvider>
  </>
);

export default Routes;
