import { SingleDrunkemon } from 'common-types';
import { PokemonTypeEnum } from 'src/types';

const drunkemonListData: SingleDrunkemon[] = [
  {
    id: '01',
    pokemonNo: 1,
    pokemonImg: {
      src: './assets/drunkemon-01.jpg',
    },
    pokemonTypeList: [PokemonTypeEnum.grass, PokemonTypeEnum.normal],
    name: '妙蛙種子',
    description:
      '經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。',
  },

  {
    id: '01',
    pokemonNo: 1,
    pokemonImg: {
      src: './assets/drunkemon-01.jpg',
    },
    pokemonTypeList: [PokemonTypeEnum.grass],
    name: '妙蛙種子',
    description:
      '經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。',
    specialType: 'mega',
  },

  {
    id: '01',
    pokemonNo: 1,
    pokemonImg: {
      src: './assets/drunkemon-01.jpg',
    },
    pokemonTypeList: [PokemonTypeEnum.grass],
    name: '妙蛙種子',
    description:
      '經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。',
  },
];

export default drunkemonListData;
