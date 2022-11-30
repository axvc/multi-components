import styled from 'styled-components';
import { Colors } from 'constants/tip-calculator/Colors';
import { Widths } from 'constants/tip-calculator/Widths';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 50%;
  font-size: 24px;

  @media (max-width: ${Widths.DESKTOP}) {
    height: 50%;
    width: auto;
  }
`;

export const Label = styled.label`
  color: ${Colors.DARK_GRAYISH_CYAN};
  margin-bottom: 4px;
  font-size: 18px;
`;

export const Field = styled.input<{ error: boolean }>`
  padding: 0.25rem 1rem 0.25rem 0.25rem;
  background-color: ${Colors.VERY_LIGHT_GRAYISH_CYAN};
  text-align: right;
  border-radius: 4px;
  width: 100%;
  outline: none;
  color: ${Colors.VERY_DARK_CYAN};
  border: 2px solid ${(props) => (props.error ? 'darkred' : Colors.WHITE)};
  transition: 0.2s ease;

  :focus {
    border: 2px solid ${Colors.STRONG_CYAN};
  }
`;

export const IconField = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  color: darkred;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
  margin-left: 2px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: fit-content;
  left: 0.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tips = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 20px;

  input {
    width: 30%;
    text-align: right;
    padding-right: 4%;

    @media (max-width: ${Widths.DESKTOP}) {
      font-size: 18px;
    }
  }
`;

export const Tip = styled.div<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? Colors.STRONG_CYAN : Colors.VERY_DARK_CYAN};
  color: ${(props) => (props.selected ? Colors.VERY_DARK_CYAN : Colors.WHITE)};
  width: 30%;
  text-align: center;
  padding: 6px;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    background-color: ${Colors.LIGHT_GRAYISH_CYAN};
    color: ${Colors.VERY_DARK_CYAN};
  }
`;

export const BillBlock = styled.div``;

export const TipBlock = styled.div`
  margin-top: 10px;
`;

export const PersonBlock = styled.div`
  margin-top: 10px;
`;
