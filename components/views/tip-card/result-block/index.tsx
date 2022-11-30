import * as ST from './styled';
import { FC } from 'react';

interface Props {
  bill?: number;
  tip?: number;
  numberOfPerson?: number;
  handleReset: () => void;
}

const ResultBlock: FC<Props> = ({ bill, tip, numberOfPerson, handleReset }) => {
  const getTipByPerson = () =>
    tip && bill && numberOfPerson ? ((tip / 100) * bill) / numberOfPerson : 0;
  const getTotalByPerson = () =>
    tip && bill && numberOfPerson
      ? getTipByPerson() + bill / numberOfPerson
      : 0;
  return (
    <ST.Container>
      <ST.Price>
        <ST.TipBlock>
          <ST.Description>
            <ST.Label>Tip Amount</ST.Label>
            <ST.PostLabel>/person</ST.PostLabel>
          </ST.Description>
          <ST.Value>${getTipByPerson().toFixed(2)}</ST.Value>
        </ST.TipBlock>
        <ST.TotalBlock>
          <ST.Description>
            <ST.Label>Total</ST.Label>
            <ST.PostLabel>/person</ST.PostLabel>
          </ST.Description>
          <ST.Value>${getTotalByPerson().toFixed(2)}</ST.Value>
        </ST.TotalBlock>
      </ST.Price>
      <ST.Button onClick={handleReset}>RESET</ST.Button>
    </ST.Container>
  );
};

export default ResultBlock;
