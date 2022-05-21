import { getMessage } from 'locale';
import Link from 'next/link';
import React, { memo } from 'react';
import { PokemonTypeLabelProps } from './types';
import styles from './pokemon-type-label.module.scss';
import { POKEMON_TYPE_COLORS } from 'src/config';

const PokemonTypeLabel = ({
  locale = 'zhTw',
  pokemonType,
}: PokemonTypeLabelProps) => {
  return (
    // <Link href={`/search-by-type/${pokemonType}`}>
    <span
      className={styles['pokemon-type-label']}
      style={{
        backgroundColor: POKEMON_TYPE_COLORS[pokemonType],
      }}
    >
      {getMessage(pokemonType, locale)}
    </span>
    // </Link>
  );
};

export default memo(PokemonTypeLabel);
