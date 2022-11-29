import * as ST from './styled';
import { FC, useState } from 'react';
import DiceIcon from 'assets/advice-generator/images/icon-dice.svg';
import Divider from 'assets/advice-generator/images/pattern-divider-desktop.svg';
import MobileDivider from 'assets/advice-generator/images/pattern-divider-mobile.svg';

interface Advice {
  id: number;
  advice: string;
}

const AdviceCard: FC = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);

  const loadAdvice = async () => {
    fetch('https://api.adviceslip.com/advice').then(async (res) => {
      const result = await res.json();
      setAdvice(result.slip);
    });
  };

  return (
    <ST.Container>
      <ST.Title>Advice #{advice?.id || '###'}</ST.Title>
      <ST.Advice>{advice?.advice || 'Loading...'}</ST.Advice>
      <ST.DividerWrapper>
        <Divider />
      </ST.DividerWrapper>
      <ST.Button onClick={() => loadAdvice()}>
        <DiceIcon />
      </ST.Button>
    </ST.Container>
  );
};

export default AdviceCard;
