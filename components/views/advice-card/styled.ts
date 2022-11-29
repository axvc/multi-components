import styled from 'styled-components';
import { Colors } from 'constants/advice-generator/Colors';

export const Container = styled.div`
  position: relative;
  width: 600px;
  background-color: ${Colors.DARK_GRAYISH_BLUE};
  font-family: 'Manrope', sans-serif;
  border-radius: 40px;
  padding: 30px 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  margin-top: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${Colors.NEON_GREEN};
  font-size: 14px;
`;

export const Advice = styled.span`
  margin-top: 30px;
  font-size: 28px;
  text-align: center;
  color: ${Colors.LIGHT_CYAN};
`;

export const DividerWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${Colors.NEON_GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -32px;
  transition: box-shadow 0.2s linear;

  :hover {
    box-shadow: 0 0 25px 1px ${Colors.NEON_GREEN};
  }
`;
