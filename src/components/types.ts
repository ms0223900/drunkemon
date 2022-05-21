import { SingleDrunkemon } from 'common-types';
import { Locale } from 'locale';
import { PokemonTypeEnum } from 'src/types';
export interface PokemonTypeLabelProps {
  locale?: Locale;
  pokemonType: PokemonTypeEnum;
}

export interface DrunkemonCardItemProps extends SingleDrunkemon {}

export interface DrunkemonCardListProps {
  drunkemonListData: SingleDrunkemon[];
}
