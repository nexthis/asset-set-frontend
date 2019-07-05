import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

import LandingPage from 'Pages/LandingPage/LandingPage';
import GlobalStyle from 'theme/GlobalStyle';

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
