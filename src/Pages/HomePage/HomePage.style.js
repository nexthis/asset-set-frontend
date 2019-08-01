import React from 'react';
import styled, { keyframes } from 'styled-components';
import BaseContainer from '@material-ui/core/Container';

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
