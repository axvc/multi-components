import styles from 'styles/Home.module.css';
import { NextPage } from 'next';
import MainHead from 'components/main-head';
import AdviceCard from 'components/views/advice-card';
import { Advice } from 'types/advice';
import { Api } from 'constants/advice-generator/Api';

interface Props {
  userAgent?: string;
  advice: Advice;
}

const AdviceGenerator: NextPage<Props> = ({ advice }) => {
  return (
    <div className={styles.adviceGenerator}>
      <MainHead
        title={'Advice Generator'}
        description={'Application for generating random tips for the day'}
      />
      <AdviceCard initialAdvice={advice} />
    </div>
  );
};

AdviceGenerator.getInitialProps = async () => {
  const res = await fetch(Api.ADVICE);
  const json = await res.json();
  return { advice: json.slip };
};

export default AdviceGenerator;
