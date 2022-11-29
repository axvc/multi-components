import * as ST from './styled';
import { FC, useState } from 'react';
import DiceIcon from 'assets/advice-generator/images/icon-dice.svg';
import Divider from 'assets/advice-generator/images/pattern-divider-desktop.svg';
import MobileDivider from 'assets/advice-generator/images/pattern-divider-mobile.svg';
import { Advice } from 'types/advice';
import { Api } from 'constants/advice-generator/Api';
import useWindowDimensions from 'hooks/window-dimensions/index.';

interface Props {
  initialAdvice: Advice;
}

const AdviceCard: FC<Props> = ({ initialAdvice }) => {
  const [advice, setAdvice] = useState<Advice | null>(initialAdvice);

  const loadAdvice = async () => {
    fetch(Api.ADVICE).then(async (res) => {
      const result = await res.json();
      setAdvice(result.slip);
    });
  };

  const { width } = useWindowDimensions();

  return (
    <ST.Container>
      <ST.Title>Advice #{advice?.id || '###'}</ST.Title>
      <ST.Advice>{advice?.advice || 'Loading...'}</ST.Advice>
      <ST.DividerWrapper>
        {width && width < 1440 ? <MobileDivider /> : <Divider />}
      </ST.DividerWrapper>
      <ST.Button onClick={() => loadAdvice()}>
        <DiceIcon />
      </ST.Button>
    </ST.Container>
  );
};

export default AdviceCard;
