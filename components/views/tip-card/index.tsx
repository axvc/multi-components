import * as ST from './styled';
import { FC, useState } from 'react';
import EnterBlock from './enter-block';
import ResultBlock from './result-block';

const TipCard: FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [numberOfPerson, setNumberOfPerson] = useState<number>(0);
  const reset = () => {
    setBill(0);
    setTip(0);
    setNumberOfPerson(0);
  };
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
      <ResultBlock
        bill={bill}
        tip={tip}
        numberOfPerson={numberOfPerson}
        handleReset={reset}
      />
    </ST.Container>
  );
};

export default TipCard;
