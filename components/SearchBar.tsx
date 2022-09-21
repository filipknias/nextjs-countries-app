import { FC, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <div className="bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600 flex items-center gap-4 px-5 py-3 text-lg rounded-sm w-1/3 dark:text-white">
      <BsSearch />
      <input 
        type='text' 
        className='flex-1 outline-none dark:bg-gray-700' 
        placeholder="Search for country..." 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
    </div>
  )
}

export default SearchBar;