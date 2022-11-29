import styles from 'styles/Home.module.css';
import { FC } from 'react';
import { useRouter } from 'next/router';
import MainHead from 'components/main-head';
import RatingCard from 'components/views/rating-card';

const Rating: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.rating}>
      <MainHead />
      <RatingCard />
    </div>
  );
};

export default Rating;
