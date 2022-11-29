import * as ST from './styled';
import { FC, useState } from 'react';
import EnterBlock from './enter-block';
import ResultBlock from './result-block';

const TipCard: FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [numberOfPerson, setNumberOfPerson] = useState<number>(0);
  return (
    <ST.Container>
      <EnterBlock
        bill={bill}
        tip={tip}
        numberOfPerson={numberOfPerson}
        handleBill={setBill}
        handleTip={setTip}
        handleNumberOfPerson={setNumberOfPerson}
      />
      <ResultBlock />
    </ST.Container>
  );
};

export default TipCard;
