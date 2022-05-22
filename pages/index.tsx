import { SingleDrunkemon } from 'common-types';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
// import staticDrunkemonCardListData from '../src/static/drunkemon-list-data';
import DrunkemonCardList from 'src/components/DrunkemonCardList';
import DrunkemonCardListContainer from 'src/components/DrunkemonCardListContainer';

export interface HomeProps {
  cardListData: SingleDrunkemon[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drunkemon 醉可夢</title>
        <meta
          name="description"
          content="Drunkemons 這裡只有喝醉的寶可夢，今日有酒今朝醉。"
        />
        <meta
          name="google-site-verification"
          content="5Ub9XZ7Mr0dXhHacFeVAIsYKOgw5lQOcfX0KtqanCuM"
        />
        <link rel="icon" href="/drunkemon-icon.svg" />
      </Head>
      <main>
        <div className={styles['list-part--wrapper']}>
          {/* <DrunkemonCardList drunkemonListData={props.cardListData} /> */}
          <DrunkemonCardListContainer />
        </div>
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps<HomeProps> = () => {
//   return {
//     props: {
//       cardListData: staticDrunkemonCardListData,
//     },
//   };
// };

export default Home;
