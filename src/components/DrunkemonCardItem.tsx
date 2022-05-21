import React, { memo } from 'react';
import PokemonTypeLabel from './PokemonTypeLabel';
import { DrunkemonCardItemProps } from './types';
import styles from './drunkemon-card-item.module.scss';

const DrunkemonCardItem = ({
  pokemonNo,
  name,
  pokemonTypeList,
  pokemonImg,
  description,
}: DrunkemonCardItemProps) => {
  return (
    <li className={styles['drunkemon-card-item']}>
      <figure className={styles['poke-img']}>
        <img src={pokemonImg.src} alt={pokemonImg.name} />
      </figure>
      <div className={styles['poke-content--wrapper']}>
        <div className={styles['poke-basic-info']}>
          <small className={styles['poke-no']}>{`No. ${pokemonNo}`}</small>
          <div className={styles['poke-type-list--wrapper']}>
            {pokemonTypeList.map((p) => (
              <PokemonTypeLabel key={p} pokemonType={p} />
            ))}
          </div>
          <h2 className={styles['poke-name']}>{name}</h2>
          <p className={styles['poke-drunk-descp']}>{'酒醉的樣子'}</p>
        </div>
        <div className={styles['poke-descp--wrapper']}>
          <p className={styles['poke-descp']}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default memo(DrunkemonCardItem);
