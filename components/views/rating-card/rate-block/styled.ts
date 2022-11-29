import styled from 'styled-components';
import { Colors } from 'constants/rating/Colors';

export const LogoWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${Colors.MEDIUM_GREY};

  svg {
    transform: translate(0.5px, 0);
  }
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 32px;
  color: ${Colors.WHITE};
`;

export const Description = styled.p`
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 30px;
  color: ${Colors.LIGHT_GREY};
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-family: 'Overpass', sans-serif;
  font-size: 16px;
  color: ${Colors.WHITE};
  width: 100%;
  background-color: ${Colors.ORANGE};
  outline: none;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  padding: 14px 0 10px 0;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    background-color: ${Colors.WHITE};
    color: ${Colors.ORANGE};
  }
`;
