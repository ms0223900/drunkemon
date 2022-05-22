import { SingleDrunkemon } from 'common-types';
import { PokemonTypeEnum } from 'src/types';

const makeDrunkemonImgSrc = (meta = '01') =>
  `./assets/drunkemons/drunkemon-${meta}.JPG`;

const drunkemonListData: SingleDrunkemon[] = [
  {
    id: '01',
    pokemonNo: 1,
    pokemonImg: {
      src: makeDrunkemonImgSrc('01'),
    },
    pokemonTypeList: [PokemonTypeEnum.grass],
    name: '妙蛙種子',
    description:
      '背上的種子可能是受到酒精的影響，比一般正常的顯得更為萎縮，乾乾癟癟臭臭的。',
  },

  {
    id: '02',
    pokemonNo: 2,
    pokemonImg: {
      src: makeDrunkemonImgSrc('02'),
    },
    pokemonTypeList: [PokemonTypeEnum.grass],
    name: '妙蛙草',
    description:
      '據說因為酗酒的關係，背上的花苞有3成不會綻開，因而無法進化成功。',
  },

  {
    id: '03',
    pokemonNo: 3,
    pokemonImg: {
      src: makeDrunkemonImgSrc('03'),
    },
    pokemonTypeList: [PokemonTypeEnum.grass],
    name: '妙蛙花',
    description: '據說喝酒時候背上的花散發的酒香，在3公里外都能聞得到。',
  },
];

// export default Array(20)
//   .fill(0)
//   .reduce((prev) => {
//     prev.push(...drunkemonListData);
//     return prev;
//   }, []);

export default drunkemonListData;
