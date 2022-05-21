declare module 'common-types' {
  import { PokemonTypeEnum } from 'src/types';

  type ID = string | number;

  interface CommonImage {
    name?: string;
    src: string;
  }

  interface SingleDrunkemon {
    id: ID;
    pokemonNo: number;
    pokemonTypeList: PokemonTypeEnum[];
    specialType?: string; // Mega, 極巨化...
    name: string;
    description: string;
    pokemonImg: CommonImage;
  }
}
