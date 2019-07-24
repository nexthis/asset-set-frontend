import styled, { keyframes } from 'styled-components';

//https://codepen.io/joshuaward/pen/XejbZv
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f2f2f2;
  padding: 19.2% 0;
`;

export const Loader = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 2px;
  width: 50px;
  height: 50px;
  ${({ theme }) => theme.size.desktop} {
    width: 100px;
    height: 100px;
  }
`;

const LoaderAnimation = keyframes`
	0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  transform: scale(0);
  transform-origin: center center;
  animation: ${LoaderAnimation} 2s infinite linear;
  &:nth-of-type(7) {
  }
  &:nth-of-type(1),
  &:nth-of-type(5),
  &:nth-of-type(9) {
    animation-delay: 0.4s;
  }

  &:nth-of-type(4),
  &:nth-of-type(8) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(2),
  &:nth-of-type(6) {
    animation-delay: 0.6s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.8s;
  }
`;
