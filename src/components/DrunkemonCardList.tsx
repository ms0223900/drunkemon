import React, { memo } from 'react';
import DrunkemonCardItem from './DrunkemonCardItem';
import { DrunkemonCardListProps } from './types';
import styles from './drunkemon-card-list.module.scss';

const DrunkemonCardList = ({ drunkemonListData }: DrunkemonCardListProps) => {
  return (
    <div className={styles['drunkemon-card-list']}>
      {drunkemonListData.map((d) => (
        <DrunkemonCardItem key={d.id} {...d} />
      ))}
    </div>
  );
};

export default memo(DrunkemonCardList);
