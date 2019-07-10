import React from 'react';

import SEO from 'components/SEO/SEO';
import SVG from 'react-inlinesvg';
import Wave from 'assets/wave.svg';
import ButtonLink from 'components/ButtonLink/ButtonLink';

import {
  Container,
  Block,
  Hero,
  Title,
  Text,
  ButtonWraper,
  StyledButton,
  TextWrapper,
} from './LandingPage.style';

const LandingPage = () => (
  <Container>
    <SEO title="welcome" />

    <Block>
      <SVG src={Wave} />
    </Block>

    <TextWrapper>
      <Title>asset set</Title>

      <Text>
        Lorem Ipsum is the text used as exemplary filler in the printing
        industry. It was first used in the 15th century by an unknown artist
        printer to fill in the text of the trial book.
      </Text>

      <ButtonWraper>
        <StyledButton
          component={ButtonLink}
          to="/home"
          variant="contained"
          color="primary"
        >
          Get Started
        </StyledButton>
        <StyledButton m="5" variant="text" color="primary">
          about us
        </StyledButton>
      </ButtonWraper>
    </TextWrapper>

    <Hero>
      <SVG src={Wave} />
    </Hero>
  </Container>
);

export default LandingPage;
