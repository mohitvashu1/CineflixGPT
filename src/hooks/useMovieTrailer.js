import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const API_OPTIONS = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWY2ZWM5M2IwNDUyYTkzYzYxMjY1YzRiOTJmMmE2NyIsIm5iZiI6MTc0ODUwNTU0Mi4wMjIsInN1YiI6IjY4MzgxM2M2OWNmMzk3YzUxMDAzODVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SzqgofDTI_nczIo9isda5kMZib_Oo4caMgIzyiuVbKk'
  }
}

  const getMovieVideos = async () => {
    const data = await fetch(
       "https://api.themoviedb.org/3/movie/" +
        movieId +
       "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;