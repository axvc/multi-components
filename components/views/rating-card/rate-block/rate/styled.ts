import styled from 'styled-components';
import { Colors } from 'constants/rating/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RateItem = styled.div<{ selected: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${(props) =>
    props.selected ? Colors.LIGHT_GREY : Colors.MEDIUM_GREY};
  color: ${(props) => (props.selected ? Colors.WHITE : Colors.LIGHT_GREY)};
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    background-color: ${Colors.ORANGE};
    color: ${Colors.WHITE};
  }
`;
