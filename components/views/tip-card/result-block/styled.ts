import styled from 'styled-components';
import { Colors } from 'constants/tip-calculator/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.VERY_DARK_CYAN};
  flex-grow: 1;
  width: 50%;
  border-radius: 12px;
  padding: 50px;
  font-size: 18px;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TipBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  color: ${Colors.LIGHT_GRAYISH_CYAN};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostLabel = styled.span`
  color: ${Colors.GRAYISH_CYAN};
`;

export const Value = styled.div`
  color: ${Colors.STRONG_CYAN};
  font-size: 48px;
`;

export const TotalBlock = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${Colors.STRONG_CYAN};
  color: ${Colors.VERY_DARK_CYAN};
  padding: 8px;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${Colors.LIGHT_GRAYISH_CYAN};
  }
`;
