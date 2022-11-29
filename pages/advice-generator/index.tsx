import styles from 'styles/Home.module.css';
import { FC } from 'react';
import { useRouter } from 'next/router';
import MainHead from 'components/main-head';
import AdviceCard from 'components/views/advice-card';

const AdviceGenerator: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.adviceGenerator}>
      <MainHead />
      <AdviceCard />
    </div>
  );
};

export default AdviceGenerator;
