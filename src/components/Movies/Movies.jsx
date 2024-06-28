import { MovieContainer } from "./Movies.style";
import MovieCard from "./MovieCard/MovieCard";
import useFetchMovies from "../../hooks/useFetchMovie";

function Movies() {
 
  const { movies, error, loading } = useFetchMovies();

  return (
    <MovieContainer loc="MovieContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      {movies &&
        movies?.map((movie) => (
          <MovieCard
            key={movie.title}
            title={"test"}
            img={movie.img}
            {...movie}
          />
        ))}
    </MovieContainer>
  );
}

export default Movies;