import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { Country } from '../../types/api';
import ButtonLink from '../../components/ButtonLink';
import { BsChevronLeft } from 'react-icons/bs';

interface Props {
  country: Country|null;
}

const CountryPage: NextPage<Props> = ({ country }) => {
  return (
    <>
      <ButtonLink href="/">
        <>
          <BsChevronLeft />
          Go back
        </>
      </ButtonLink>
      {country ? (
        <div className="flex flex-col md:flex-row gap-10">
          <img src={country.flags.svg} alt={country.name.common} className="w-full md:w-1/3 h-full" />
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-2xl">{country.name.common}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-6">
              <div>
                <span className="font-medium text-md">Official Name: </span>
                <span className="font-light text-md">{country.name.official}</span>
              </div>
              <div>
                <span className="font-medium text-md">Population: </span>
                <span className="font-light text-md">{country.population.toLocaleString()}</span>
              </div>
              <div>
                <span className="font-medium text-md">Region: </span>
                <span className="font-light text-md">{country.region}</span>
              </div>
              <div>
                <span className="font-medium text-md">Sub Region: </span>
                <span className="font-light text-md">{country.subregion}</span>
              </div>
              <div>
                <span className="font-medium text-md">Capital: </span>
                <span className="font-light text-md">{country.capital}</span>
              </div>
              <div>
                <span className="font-medium text-md">Top Level Domain: </span>
                <span className="font-light text-md">{country.tld[0]}</span>
              </div>
              <div>
                <span className="font-medium text-md">Currency: </span>
                <span className="font-light text-md">{Object.values(country.currencies)[0].name}</span>
              </div>
              <div>
                <span className="font-medium text-md">Language: </span>
                <span className="font-light text-md">{Object.values(country.languages)[0]}</span>
              </div>
            </div>
            {country.borders && (
              <div className="flex flex-col md:flex-row items-center gap-4">
                <h1 className="font-bold text-lg">Border Countries:</h1>
                <div className="flex flex-col md:flex-row gap-3">
                  {country.borders.map((borderCountry) => (
                    <div className="bg-white dark:bg-gray-700 shadow-md rounded-md text-center py-1 px-8" key={borderCountry}>
                      {borderCountry}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-xl font-bold">Country not found</h1>
      )}
    </>
  )
}

export default CountryPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.countryName) return { props: { country: null } };
  try {
    const { data: country }: { data: Country[] } = await axios.get(`https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`);
    return { props: { country: country[0] } };
  } catch (err: any) {
    console.log(err);
    return { props: { countries: null } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: countries }: { data: Country[] } = await axios.get('https://restcountries.com/v3.1/all');
  const paths = countries.map((country) => ({
    params: { countryName: country.name.common },
  }));
  console.log(paths)
  return { paths, fallback: false };
};