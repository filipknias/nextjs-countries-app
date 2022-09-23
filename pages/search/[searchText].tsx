import type { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { Country } from '../../types/api';
import CountriesList from '../../components/CountriesList';
import ButtonLink from '../../components/ButtonLink';
import { BsFillGridFill } from 'react-icons/bs';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  countries: Country[]|null;
}

const SearchPage: NextPage<Props> = ({ countries }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Results for {router.query.searchText}</title>
      </Head>
      <ButtonLink href="/">
        <>
          <BsFillGridFill />
          Show all countries
        </>
      </ButtonLink>
      {countries ? <CountriesList countries={countries} /> : (
        <h1 className="text-center text-xl font-bold">No countries found</h1>
      )}
    </>
  )
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params.searchText) return { props: { country: null } };
  try {
    const { data: countries } = await axios.get(`https://restcountries.com/v3.1/name/${params.searchText}`);
    return { props: { countries } };
  } catch (err: any) {
    console.log(err);
    return { props: { countries: null } };
  }
};