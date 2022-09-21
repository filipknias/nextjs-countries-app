import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RegionSelect from '../components/RegionSelect';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-5 my-3">
          <SearchBar />
          <RegionSelect />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
