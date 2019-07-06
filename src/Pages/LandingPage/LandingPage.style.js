import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.00833em;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  max-width: 500px;
  width: 90%;
  margin: 15px auto;
  text-align: center;
`;

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  padding: 6px 20px;
`;
