import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import { StylesProvider } from '@material-ui/styles';

const LandingPage = lazy(() => import('Pages/LandingPage/LandingPage'));
const HomePage = lazy(() => import('Pages/HomePage/HomePage'));

const Routes = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        {/* lazy loading / Code Splitting */}
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </ThemeProvider>
  </>
);

export default Routes;
