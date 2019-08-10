import React from 'react';
import styled, { keyframes } from 'styled-components';
import BaseContainer from '@material-ui/core/Container';
import CardBase from '@material-ui/core/Card';
import CardMediaBase from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

export const Container = styled(BaseContainer)`
  flex-grow: 1;
  margin: 50px auto;
  padding: 0 20px;
  @media (min-width: 1280px) {
    max-width: 1072px;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
`;

const LoadingAnimation = keyframes`
  0%{
    opacity:0;
    transform: scaleX(0);
  }
  100%{
    opacity:.5;
    transform: scaleX(1);
  }
`;

const LoadingBox = styled.div`
  background-color: ${({ theme }) => theme.black};
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${LoadingAnimation} 2s infinite ease-in;
  animation-fill-mode: backwards;
  /* &:nth-child(1){
    animation-delay: 0s;
  } */
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2.3s;
  }
`;

export const Loading = () => (
  <LoadingContainer>
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
  </LoadingContainer>
);

export const Card = styled(CardBase)`
  border-radius: 0;
  margin: 0 auto;
`;

export const CardMedia = styled(CardMediaBase)`
  height: 0;
  padding-top: 56.25%;

  /* 16:9 */
`;

export const CardTitle = styled.h1`
  font-size: 1.36rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;

  ${({ theme }) => theme.size.tablet} {
    font-size: 2.03rem;
  }

  ${({ theme }) => theme.size.desktop} {
    font-size: 2.7rem;
  }
  ${({ theme }) => theme.size.huge} {
    font-size: 3.37rem;
  }
`;

export const ColorBox = styled(Box)`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: aqua;
  margin-left: 2px;
  vertical-align: middle;
  &:first-child {
    margin: 0;
  }

  ${({ theme }) => theme.size.tablet} {
    width: 22.5px;
    height: 22.5px;
    margin-left: 3px;
  }

  ${({ theme }) => theme.size.desktop} {
    width: 30px;
    height: 30px;
    margin-left: 4px;
  }
  ${({ theme }) => theme.size.huge} {
    width: 37.5px;
    height: 37.5px;
    margin-left: 5px;
  }
`;

export const CardAuthor = styled.h2`
  font-size: 0.67rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;

  ${({ theme }) => theme.size.tablet} {
    font-size: 1rem;
  }

  ${({ theme }) => theme.size.desktop} {
    font-size: 1.35rem;
  }
  ${({ theme }) => theme.size.huge} {
    font-size: 1.68rem;
  }
`;

export const CardDescription = styled.h3`
  color: #4B4B4B;
  min-height: 110px;
  font-size: 0.48rem;
  line-height: 1.33;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0em;
  margin: 0;
  margin-top: 22.5px;

  ${({ theme }) => theme.size.tablet} {
    font-size: 0.72rem;
    min-height: 165px;
    margin-top: 33.75px;
  }

  ${({ theme }) => theme.size.desktop} {
    font-size: 0.96rem;
    min-height: 220px;
    margin-top: 45px;
  }
  ${({ theme }) => theme.size.huge} {
    font-size: 1.2rem;
    min-height: 275px;
    margin-top: 56.25x;
  }
`;