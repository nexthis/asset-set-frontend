import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import hero from '../../assets/hero-slider.svg';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.size.desktop} {
    flex-direction: row;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black};
  position: relative;

  svg {
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${({ theme }) => theme.size.desktop} {
    display: none;
  }
`;
export const Hero = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black};
  position: relative;

  svg {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }
  ${({ theme }) => theme.size.desktop} {
    width: 55%;
    background: ${({ theme }) => theme.black} url(${hero}) right no-repeat;
    background-size: 80%;
    background-size: 75%;
    background-position-x: 90%;
    svg {
      width: 100vh;
      height: 150px;
      transform: rotate(90deg);
      transform-origin: top left;
      left: 150px;
    }
  }
  ${({ theme }) => theme.size.huge} {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.00833em;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => theme.size.desktop} {
    font-size: 3.8rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.01562em;
    text-align: left;
  }

  ${({ theme }) => theme.size.huge} {
    font-size: 5rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  ${({ theme }) => theme.size.desktop} {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.0075em;
    text-align: left;
    margin: 0;
  }

  ${({ theme }) => theme.size.huge} {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
  }
`;

export const TextWrapper = styled.header`
  ${({ theme }) => theme.size.desktop} {
    width: 45%;
    padding-left: 5%;
  }
  ${({ theme }) => theme.size.huge} {
    width: 50%;
    padding-left: 5%;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  ${({ theme }) => theme.size.desktop} {
    justify-content: left;
  }
`;

export const StyledButton = styled(Button)`
  padding: 6px 20px;
  ${({ theme }) => theme.size.desktop} {
    padding: 10px 25px;
    font-size: 0.8rem;
  }
  ${({ theme }) => theme.size.huge} {
    padding: 10px 40px;
    font-size: 1rem;
  }
`;
