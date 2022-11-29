import * as ST from './styled';
import { FC } from 'react';

const ResultBlock: FC = () => {
  return (
    <ST.Container>
      <ST.Price>
        <ST.TipBlock>
          <ST.Description>
            <ST.Label>Tip Amount</ST.Label>
            <ST.PostLabel>/person</ST.PostLabel>
          </ST.Description>
          <ST.Value>$1.34</ST.Value>
        </ST.TipBlock>
        <ST.TotalBlock>
          <ST.Description>
            <ST.Label>Total</ST.Label>
            <ST.PostLabel>/person</ST.PostLabel>
          </ST.Description>
          <ST.Value>$24.5</ST.Value>
        </ST.TotalBlock>
      </ST.Price>
      <ST.Button>RESET</ST.Button>
    </ST.Container>
  );
};

export default ResultBlock;
