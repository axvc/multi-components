import styled from 'styled-components';
import { Colors } from 'constants/rating/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  animation: fade-in 0.2s linear;
`;

export const ThanksLogoWrapper = styled.div`
  margin-top: 30px;
`;

export const RateInfo = styled.div`
  margin-top: 20px;
  padding: 10px 20px 6px 20px;
  border-radius: 24px;
  color: ${Colors.ORANGE};
  background-color: ${Colors.MEDIUM_GREY};
`;

export const Title = styled.h2`
  margin-top: 40px;
  color: ${Colors.WHITE};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${Colors.LIGHT_GREY};
`;
