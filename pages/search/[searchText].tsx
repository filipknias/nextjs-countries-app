import type { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { Country } from '../../types/api';
import CountriesList from '../../components/CountriesList';

interface Props {
  countries: Country[];
}

const SearchPage: NextPage<Props> = ({ countries }) => {
  return (
    <CountriesList countries={countries} />
  )
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params.searchText) return { props: { country: null } };
  const { data: countries } = await axios.get(`https://restcountries.com/v3.1/name/${params.searchText}`);

  return {
    props: { countries },
  }
};