import * as ST from './styled';
import { FC } from 'react';
import { Rates } from 'constants/rating/Rates';
import ThanksLogo from 'assets/rating/images/illustration-thank-you.svg';

interface Props {
  selectedRate: Rates;
}

const ThanksBlock: FC<Props> = ({ selectedRate }) => {
  return (
    <ST.Container>
      <ST.ThanksLogoWrapper>
        <ThanksLogo />
      </ST.ThanksLogoWrapper>
      <ST.RateInfo>You selected {selectedRate} out of 5</ST.RateInfo>
      <ST.Title>Thank you!</ST.Title>
      <ST.Description>
        <span>We appreciate you taking the time to give a rating.</span>
        <span>
          If you ever need more support, don’t hesitate to get in touch!
        </span>
      </ST.Description>
    </ST.Container>
  );
};

export default ThanksBlock;
