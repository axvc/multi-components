import * as ST from './styled';
import { Dispatch, FC, SetStateAction } from 'react';
import Rate from './rate';
import StarLogo from 'assets/rating/images/icon-star.svg';
import { Rates } from 'constants/rating/Rates';

interface Props {
  selectedRate: Rates;
  handleSelect: Dispatch<SetStateAction<Rates>>;
  handleSubmit: () => void;
}

const RateBlock: FC<Props> = ({ selectedRate, handleSelect, handleSubmit }) => (
  <ST.Container>
    <ST.LogoWrapper>
      <StarLogo />
    </ST.LogoWrapper>
    <ST.Title>How did we do?</ST.Title>
    <ST.Description>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </ST.Description>
    <Rate selectedRate={selectedRate} handleSelect={handleSelect} />
    <ST.Button onClick={() => handleSubmit()}>Submit</ST.Button>
  </ST.Container>
);

export default RateBlock;
