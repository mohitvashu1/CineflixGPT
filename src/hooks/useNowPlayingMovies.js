import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";





const useNowPlayingMovies = ()=>{
    
const dispatch = useDispatch();

  
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWY2ZWM5M2IwNDUyYTkzYzYxMjY1YzRiOTJmMmE2NyIsIm5iZiI6MTc0ODUwNTU0Mi4wMjIsInN1YiI6IjY4MzgxM2M2OWNmMzk3YzUxMDAzODVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SzqgofDTI_nczIo9isda5kMZib_Oo4caMgIzyiuVbKk'
  }
};
  const getPlayingMovies=async () => {
    const data= await fetch(                                                                                                                                                                                                                                                                         
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getPlayingMovies();
    
  }, []);
}

export default useNowPlayingMovies;
