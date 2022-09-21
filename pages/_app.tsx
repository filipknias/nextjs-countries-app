import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-5">
        <div className="flex flex-col md:flex-row justify-between my-3">
          <SearchBar />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
