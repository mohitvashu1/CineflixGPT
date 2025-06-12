
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './header'
import {MainContainer} from './MainContainer';
import {SecondaryContainer} from './SecondaryContainer';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';



const Browse = () => {

  const showGPTsearch = useSelector(store=> store.gpt.showGptSearch);
  

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className=' h-screen'>
      <Header/>
     { showGPTsearch ? (
      <GPTsearch/>
     ) :(
      <>
       <MainContainer/>
      <SecondaryContainer/>
      </>
     ) }
    </div>
  );
}; 

export default Browse
