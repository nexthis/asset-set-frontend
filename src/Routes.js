import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';

import LandingPage from 'Pages/LandingPage/LandingPage';

const Routes = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </ThemeProvider>
  </>
);

export default Routes;
