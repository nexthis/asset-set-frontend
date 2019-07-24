import styled from 'styled-components';

import CardBase from '@material-ui/core/Card';
import CardMediaBase from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

export const Card = styled(CardBase)`
  max-width: 500px;
  border-radius: 0;
  margin: 0 auto;
`;
export const CardMedia = styled(CardMediaBase)`
  height: 0;
  padding-top: 56.25%;

  /* 16:9 */
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  letter-spacing: 0em;
  margin: 0;
`;

export const ColorBox = styled(Box)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: aqua;
  margin-left: 4px;
  &:first-child {
    margin: 0;
  }
`;
