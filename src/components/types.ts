import { PokemonTypeEnum, SingleDrunkemon } from 'common-types';

export interface DrunkemonCardItemProps extends SingleDrunkemon {}

export interface PokemonTypeLabelProps {
  pokemonType: PokemonTypeEnum;
}
