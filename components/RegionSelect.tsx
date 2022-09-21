import { FC, useState, useEffect, useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const REGIONS = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const RegionSelect: FC = () => {
  const [listOpened, setListOpened] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    // Hide list on resize
    const resizeCallback = () => setListOpened(false);
    window.addEventListener('resize', resizeCallback);

    return () => {
      window.removeEventListener('resize', resizeCallback)
    }
  }, []);

  useEffect(() => {
    // Hide list on click outside
    const documentClickCallback = (e: any) => {
      if (!e.target) return;
      if (listRef.current && !listRef.current.contains(e.target)) {
        setListOpened(false); 
      }
    };
    document.addEventListener("click", documentClickCallback);

    return () => {
      document.removeEventListener('click', documentClickCallback)
    }
  }, [listRef]);

  return (
    <div ref={listRef} className="relative bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600 px-6 py-3 rounded-sm dark:text-white">
      <div className="cursor-pointer flex items-center justify-between gap-3 text-sm md:text-md lg:text-lg" onClick={() => setListOpened(!listOpened)}>
        Filter by region
        <BsChevronDown />
      </div>
      {listOpened && (
        <div className="absolute top-full left-0 rounded-sm w-full mt-2 shadow-sm py-3 px-5 border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700">
          <ul className="flex flex-col gap-3">
            {REGIONS.map((region) => (
              <li className="cursor-pointer text-sm md:text-md lg:text-lg" key={region}>{region}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RegionSelect;