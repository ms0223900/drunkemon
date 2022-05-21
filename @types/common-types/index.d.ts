declare module 'common-types' {
  type ID = string | number;

  interface CommonImage {
    name?: string;
    src: string;
  }

  enum PokemonTypeEnum {
    normal = 'normal',
  }

  enum PokemonRegionEnum {
    kanto = 'kanto',
  }

  interface SingleDrunkemon {
    id: ID;
    pokemonNo: number;
    pokemonTypeList: PokemonTypeEnum[];
    name: string;
    description: string;
    pokemonImg: CommonImage;
  }
}
