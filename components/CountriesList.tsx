import { FC } from 'react';
import { Country } from '../types/api';
import CountryCard from './Country';

interface Props {
  countries: Country[];
}

const CountriesList: FC<Props> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24">
      {countries.map((country) => <CountryCard country={country} key={country.name.common} />)}
    </div>
  )
}

export default CountriesList;