import styled from 'styled-components';

import CardBase from '@material-ui/core/Card';
import CardMediaBase from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

export const Card = styled(CardBase)`
  min-width: 500px;
  border-radius: 0;
  margin: 0 auto;
`;

export const CardMedia = styled(CardMediaBase)`
  height: 0;
  padding-top: 56.25%;

  /* 16:9 */
`;

export const CardTitle = styled.h1`
  font-size: 2.7rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;
`;

export const ColorBox = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: aqua;
  margin-left: 4px;
  vertical-align: middle;
  &:first-child {
    margin: 0;
  }
`;

export const CardAuthor = styled.h2`
  font-size: 1.35rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;
`;

export const CardDescription = styled.h3`
  color: #4B4B4B;
  min-height: 220px;
  font-size: 0.96rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;
  margin-top: 45px;
`;