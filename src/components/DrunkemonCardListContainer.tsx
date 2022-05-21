import React, { memo } from 'react';
import drunkemonListData from 'src/static/drunkemon-list-data';
import DrunkemonCardList from './DrunkemonCardList';

const DrunkemonCardListContainer = () => {
  return <DrunkemonCardList drunkemonListData={drunkemonListData} />;
};

export default memo(DrunkemonCardListContainer);
