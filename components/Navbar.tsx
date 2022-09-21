import { FC } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkTheme from '../hooks/useDarkTheme';

const Navbar: FC = () => {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  return (
    <div className="w-full bg-white dark:bg-gray-700 shadow-md">
      <div className="container mx-auto p-5 flex items-center justify-between dark:text-white text-black">
        <h1 className="font-bold md:text-2xl">Where in the world?</h1>
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