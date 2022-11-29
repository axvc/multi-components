import { Dispatch, FC, SetStateAction } from 'react';
import * as ST from './styled';
import { Rates } from 'constants/rating/Rates';

const rates = [Rates.ONE, Rates.TWO, Rates.THREE, Rates.FOUR, Rates.FIVE];

interface Props {
  selectedRate?: Rates;
  handleSelect: Dispatch<SetStateAction<Rates>>;
}

const Rate: FC<Props> = ({ selectedRate, handleSelect }) => {
  const onItemClick = (rate: Rates): void => handleSelect(rate);
  const isRateSelected = (rate: Rates): boolean => rate === selectedRate;
  return (
    <ST.Container>
      {rates.map((rate) => (
        <ST.RateItem
          key={rate}
          selected={isRateSelected(rate)}
          onClick={() => onItemClick(rate)}
        >
          {rate}
        </ST.RateItem>
      ))}
    </ST.Container>
  );
};

export default Rate;
