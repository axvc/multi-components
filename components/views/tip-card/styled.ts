import styled from 'styled-components';
import { Colors } from 'constants/tip-calculator/Colors';
import { Widths } from 'constants/tip-calculator/Widths';

export const Container = styled.div`
  position: relative;
  width: 1000px;
  background-color: ${Colors.WHITE};
  font-family: 'Space Mono', monospace;
  border-radius: 40px;
  padding: 40px;
  display: flex;
  animation: fade-in 0.1s linear;
  gap: 40px;

  @media (max-width: ${Widths.DESKTOP}) {
    width: 90%;
  }
`;
