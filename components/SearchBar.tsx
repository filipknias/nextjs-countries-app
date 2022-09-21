import { FC, useState, FormEvent, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/router';

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchText === '') return;
    router.push(`/search/${searchText}`);
  }

  useEffect(() => {
    // Clear search text on url change
    if (router.route === '/search/[searchText]') return;
    setSearchText('');
  }, [router.route]);

  return (
    <form 
      className="bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600 flex items-center gap-4 px-5 py-3 text-sm md:text-md lg:text-lg rounded-sm w-full md:w-2/3 lg:w-1/3"
      onSubmit={handleSubmit}  
    >
      <BsSearch />
      <input 
        type='text' 
        className='flex-1 outline-none dark:bg-gray-700' 
        placeholder="Search for country..." 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
    </form>
  )
}

export default SearchBar;