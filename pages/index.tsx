import type { NextPage, GetStaticProps } from 'next';
import axios from 'axios';
import { Country } from '../types/api';
import CountriesList from '../components/CountriesList';

interface Props {
  countries: Country[];
}

const Home: NextPage<Props> = ({ countries }) => {
  return (
    <CountriesList countries={countries} />
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: countries } = await axios.get('https://restcountries.com/v3.1/all');

  return {
    props: { countries },
  }
};