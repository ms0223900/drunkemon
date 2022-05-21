import React, { memo } from 'react';
import PokemonTypeLabel from './PokemonTypeLabel';
import { DrunkemonCardItemProps } from './types';
import styles from './drunkemon-card-item.module.scss';

const DrunkemonCardItem = ({
  pokemonNo,
  name,
  pokemonTypeList,
  pokemonImg,
  specialType,
  description,
}: DrunkemonCardItemProps) => {
  return (
    <li className={styles['drunkemon-card-item']}>
      <figure className={styles['poke-img']}>
        <img src={pokemonImg.src} alt={pokemonImg.name || name} />
      </figure>
      <div className={styles['poke-content--wrapper']}>
        <div className={styles['poke-basic-info']}>
          <div className={styles['poke-no-and-type--wrapper']}>
            <small className={styles['poke-no']}>
              {`No. ${pokemonNo.toString().padStart(3, '0')}`}
            </small>
            <div className={styles['poke-type-list--wrapper']}>
              {pokemonTypeList.map((p) => (
                <PokemonTypeLabel key={p} pokemonType={p} />
              ))}
            </div>
          </div>
          <h2 className={styles['poke-name']}>{name}</h2>
          <p className={styles['poke-drunk-descp']}>{specialType}</p>
        </div>
        <div className={styles['poke-descp--wrapper']}>
          <p className={styles['poke-descp']}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default memo(DrunkemonCardItem);
