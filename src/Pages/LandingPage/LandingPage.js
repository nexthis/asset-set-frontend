import React from 'react';

import SEO from 'components/SEO';
import SVG from 'react-inlinesvg';
import {
  Container,
  Block,
  Hero,
  Title,
  Text,
  ButtonWraper,
  StyledButton,
} from './LandingPage.style';

import Wave from '../../assets/wave.svg';

const LandingPage = () => (
  <Container>
    <SEO title="home" />

    <Block>
      <SVG src={Wave} />
    </Block>

    <div>
      <Title>asset set</Title>

      <Text>
        Lorem Ipsum is the text used as exemplary filler in the printing
        industry. It was first used in the 15th century by an unknown artist
        printer to fill in the text of the trial book.
      </Text>
      <ButtonWraper>
        <StyledButton variant="contained" color="primary">
          Get Started
        </StyledButton>
        <StyledButton m="5" variant="text" color="primary">
          about us
        </StyledButton>
      </ButtonWraper>
    </div>

    <Hero>
      <SVG src={Wave} />
    </Hero>
  </Container>
);

export default LandingPage;
