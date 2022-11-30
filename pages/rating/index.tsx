import styles from 'styles/Home.module.css';
import { FC } from 'react';
import MainHead from 'components/main-head';
import RatingCard from 'components/views/rating-card';

const Rating: FC = () => {
  return (
    <div className={styles.rating}>
      <MainHead
        title={'Rating Window'}
        description={'Component that allows you to rate from 1 to 5'}
      />
      <RatingCard />
    </div>
  );
};

export default Rating;
