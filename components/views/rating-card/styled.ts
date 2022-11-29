import styled from 'styled-components';
import { Colors } from 'constants/rating/Colors';

export const Container = styled.div<{ success: boolean }>`
  width: 400px;
  height: 400px;
  background-color: ${Colors.DARK_BLUE};
  font-family: 'Overpass', sans-serif;
  border-radius: 40px;
  padding: ${(props) => (props.success ? '16px' : '30px')};
`;
