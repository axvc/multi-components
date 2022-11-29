import styles from 'styles/Home.module.css';
import { FC } from 'react';
import { useRouter } from 'next/router';
import MainHead from 'components/main-head';

const TipCalculator: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.rating}>
      <MainHead />
      <h1>Tip calculator</h1>
    </div>
  );
};

export default TipCalculator;
