import { SingleDrunkemon } from 'common-types';
import { PokemonTypeEnum } from 'src/types';
import drunkemonNames from './drunkemon-names-data';
import drunkemonOptionListData from './drunkemon-option-list';

const makeDrunkemonImgSrc = (meta = '01') =>
  `./assets/drunkemons/drunkemon-${meta}.JPG`;

const makeDrunkemonDataByIdx = (
  startIdx = 0,
  amount = 100,
  optionsList?: Partial<SingleDrunkemon>[],
  nameList?: string[]
): SingleDrunkemon[] => {
  const arr = Array(amount).fill(0);

  return arr.map((a, idx) => {
    const _idx = idx + startIdx;
    const idxStr = _idx.toString().padStart(2, '0');

    return {
      id: _idx.toString().padStart(2, '0'),
      pokemonNo: _idx,
      pokemonImg: {
        src: makeDrunkemonImgSrc(idxStr),
      },
      pokemonTypeList: [],
      name: nameList ? nameList[idx] : '',
      description: '',
      ...(optionsList ? optionsList[idx] || {} : {}),
    };
  });
};

const drunkemonListData: SingleDrunkemon[] = [
  {
    id: '01',
    pokemonNo: 1,
    pokemonImg: {
      src: makeDrunkemonImgSrc('01--fixed'),
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

  {
    id: '04',
    pokemonNo: 4,
    pokemonImg: {
      src: makeDrunkemonImgSrc('04'),
    },
    pokemonTypeList: [PokemonTypeEnum.fire],
    name: '小火龍',
    description:
      '酒精雖然是他的主食之一，但要小心攝取太多而火氣太大，尾巴的火苗會太旺盛。',
  },
  {
    id: '05',
    pokemonNo: 5,
    pokemonImg: {
      src: makeDrunkemonImgSrc('05'),
    },
    pokemonTypeList: [PokemonTypeEnum.fire],
    name: '火恐龍',
    description:
      '雖然平常性情相當火爆，但喝了酒之後反而比較乖巧，有時還會躺在沙發上發呆。',
  },
  {
    id: '06',
    pokemonNo: 6,
    pokemonImg: {
      src: makeDrunkemonImgSrc('06'),
    },
    pokemonTypeList: [PokemonTypeEnum.fire],
    name: '噴火龍',
    description:
      '喝了酒之後經常鬧得一發不可收拾，須將您的草系醉可夢帶遠離他，以策安全。',
  },
  {
    id: '07',
    pokemonNo: 7,
    pokemonImg: {
      src: makeDrunkemonImgSrc('07'),
    },
    pokemonTypeList: [PokemonTypeEnum.water],
    name: '傑尼龜',
    description:
      '即便在乾燥的陸地上，也能吐出彩虹色含有酒精的潤滑物質，在陸上滑動暢行無阻。',
  },
  {
    id: '08',
    pokemonNo: 8,
    pokemonImg: {
      src: makeDrunkemonImgSrc('08'),
    },
    pokemonTypeList: [PokemonTypeEnum.water],
    name: '卡咪龜',
    description:
      '喜歡將啤酒的瓶蓋藏在蓬鬆的大尾巴中，據說在陽光強烈時就像是寶石般亮眼，閃閃動人。',
  },
  {
    id: '09',
    pokemonNo: 9,
    pokemonImg: {
      src: makeDrunkemonImgSrc('09'),
    },
    pokemonTypeList: [PokemonTypeEnum.water],
    name: '水箭龜',
    description:
      '宴會炒熱氣氛的好幫手，不只擅長跳舞，背上甲殼的噴水口還能客製化噴出各種不同的酒。',
  },
  {
    id: '10',
    pokemonNo: 10,
    pokemonImg: {
      src: makeDrunkemonImgSrc('10'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '綠毛蟲',
    description:
      '喝醉的時候常常好幾隻交疊在一起，因為腳上的吸盤吸力太強而難以分離彼此。',
  },
  {
    id: '11',
    pokemonNo: 11,
    pokemonImg: {
      src: makeDrunkemonImgSrc('11'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '鐵甲蛹',
    description: '因為外殼很硬，喝醉的時候就像蹺蹺板一樣左搖右擺。',
  },
  {
    id: '12',
    pokemonNo: 12,
    pokemonImg: {
      src: makeDrunkemonImgSrc('12'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '巴大蝶',
    description: '採蜜採累了會在花朵上小歇一會，但常常會不小心睡過頭。',
  },
  {
    id: '13',
    pokemonNo: 13,
    pokemonImg: {
      src: makeDrunkemonImgSrc('13--fixed'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '獨角蟲',
    description: '喜歡把玩啤酒的空罐子，剩餘的酒精就足以讓它醉倒。',
  },
  {
    id: '14',
    pokemonNo: 14,
    pokemonImg: {
      src: makeDrunkemonImgSrc('14--fixed'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '鐵殼蛹',
    description: '會躲在充滿酒瓶裡，據說是為了抵禦天敵而發展出這種習性。',
  },
  {
    id: '15',
    pokemonNo: 15,
    pokemonImg: {
      src: makeDrunkemonImgSrc('15--fixed'),
    },
    pokemonTypeList: [PokemonTypeEnum.bug],
    name: '大針蜂',
    description:
      '大針鋒不產蜜，喜歡喝三蜜蜂所產的蜜釀造的酒，會為了蜂蜜保護他們。',
  },
  ...makeDrunkemonDataByIdx(16, 86, drunkemonOptionListData, drunkemonNames),
];

// export default Array(20)
//   .fill(0)
//   .reduce((prev) => {
//     prev.push(...drunkemonListData);
//     return prev;
//   }, []);

export default drunkemonListData;
