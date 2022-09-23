import { FC } from 'react';
import { Country } from '../types/api';
import Link from 'next/link';

interface Props { 
  country: Country;
}

const Country: FC<Props> = ({ country }) => {
  return (
    <Link href={`/countries/${country.name.common}`}>
      <div className="bg-white dark:bg-gray-700 rounded-md shadow-md cursor-pointer">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-1/2 object-cover" />
        <div className="p-4 flex flex-col justify-center gap-5">
          <h1 className="font-bold text-lg">{country.name.common}</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-medium">Population: </span>
              <span className="font-light">{country.population.toLocaleString()}</span>
            </li>
            <li>
              <span className="font-medium">Region: </span>
              <span className="font-light">{country.region}</span>
            </li>
            <li>
              <span className="font-medium">Capital: </span>
              <span className="font-light">{country.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default Country;