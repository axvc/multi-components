import styles from '../styles/Home.module.css';
import Link from 'next/link';
import MainHead from 'components/main-head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <MainHead />

      <main className={styles.main}>
        <Link className="text-3xl font-bold underline" href={'/rating'}>
          Rating Component
        </Link>
        <Link href={'/tip-calculator'}>Tip calculator</Link>
        <Link href={'/advice-generator'}>Advice generator</Link>
      </main>
    </div>
  );
};

export default Home;
