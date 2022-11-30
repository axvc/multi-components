import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from 'constants/tip-calculator/Colors';
import { Widths } from 'constants/tip-calculator/Widths';

createGlobalStyle`
  body {
    background-color: ${Colors.LIGHT_GRAYISH_CYAN};
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: ${Colors.LIGHT_GRAYISH_CYAN};
    }
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: ${Colors.WHITE};
  font-family: 'Space Mono', monospace;
  border-radius: 40px;
  padding: 40px;
  display: flex;
  animation: fade-in 0.1s linear;
  gap: 40px;

  @media (max-width: ${Widths.DESKTOP}) {
    flex-direction: column;
    width: 90%;
    gap: 10px;
  }
`;
