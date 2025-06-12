import { useSelector } from "react-redux"
import { Movielist } from "./Movielist"

export const SecondaryContainer = () => {
const movies = useSelector((store) =>store.movies);

  return (
     movies.nowPlayingMovies && (
      <div className="bg-black scrollbar-none">
        <div className=" mt-0 md:-mt-28 pl-4 md:pl-12 relative z-50 scrollbar-none">
          <Movielist  title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Trending"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Popular"} movies={movies.popularMovies} />
          
        </div>
      </div>
    )
  ); 
};


