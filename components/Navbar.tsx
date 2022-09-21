import { FC } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkTheme from '../hooks/useDarkTheme';
import Link from 'next/link';

const Navbar: FC = () => {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  return (
    <div className="w-full bg-white dark:bg-gray-700 shadow-md">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold md:text-2xl cursor-pointer">Where in the world?</h1>
        </Link>
        <div className="flex items-center gap-2 cursor-pointer md:text-xl" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <>
              <BsSun />
              Light Mode
            </>
          ) : (
            <>
              <BsMoon />
              Dark Mode
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;