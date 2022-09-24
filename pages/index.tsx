import type { NextPage, GetStaticProps } from 'next';
import axios from 'axios';
import { Country } from '../types/api';
import CountriesList from '../components/CountriesList';
import Head from 'next/head';

interface Props {
  countries: Country[];
}

const Home: NextPage<Props> = ({ countries }) => {
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <CountriesList countries={countries} />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: countries } = await axios.get('https://restcountries.com/v3.1/all');

  return {
    props: { countries },
  }
};