import Link from 'next/link';
import React, { memo } from 'react';
import { PokemonTypeLabelProps } from './types';

const PokemonTypeLabel = ({ pokemonType }: PokemonTypeLabelProps) => {
  return (
    <Link href={`/search-by-type/${pokemonType}`}>
      <a>{pokemonType}</a>
    </Link>
  );
};

export default memo(PokemonTypeLabel);
