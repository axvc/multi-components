import * as ST from './styled';
import { FC, useState } from 'react';
import { Rates } from 'constants/rating/Rates';
import RateBlock from './rate-block';
import ThanksBlock from './thanks-block';

const RatingCard: FC = () => {
  const [selectedRate, setSelectedRate] = useState<Rates>(Rates.EMPTY);
  const [success, setSuccess] = useState<boolean>(false);
  const submit = () => selectedRate && setSuccess(true);
  return (
    <ST.Container success={success}>
      {success ? (
        <ThanksBlock selectedRate={selectedRate} />
      ) : (
        <RateBlock
          selectedRate={selectedRate}
          handleSelect={setSelectedRate}
          handleSubmit={submit}
        />
      )}
    </ST.Container>
  );
};

export default RatingCard;
