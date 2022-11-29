import styles from 'styles/Home.module.css';
import { FC } from 'react';
import MainHead from 'components/main-head';
import SplitterLogo from 'assets/tip-calculator/images/logo.svg';
import TipCard from 'components/views/tip-card';

const TipCalculator: FC = () => {
  return (
    <div className={styles.tipCalculator}>
      <MainHead />
      <div className={styles.tipLogoWrapper}>
        <SplitterLogo />
      </div>
      <TipCard />
    </div>
  );
};

export default TipCalculator;
