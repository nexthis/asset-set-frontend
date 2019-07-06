import React from 'react';

import SEO from 'components/SEO';
import Button from '@material-ui/core/Button';
import { Container } from './LandingPage.style';

const LandingPage = () => (
  <Container>
    <SEO title="home" />
    <div>
      <h1>asdasdasd</h1>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  </Container>
);

export default LandingPage;
