import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovie";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CardImgContainer,
  CardInfoContainer,
  Text,
  Title,
  UperText,
} from "../Movies/MovieCard/MovieCard.style";
import { MovieContainer, MovieImgSingle } from "./Movie.style";

function Movie() {
  const { id } = useParams(); 
  const { movies: movie, error, loading } = useFetchMovies("/" + id);
  const { isLocalDataEmpty, localData, handleLocalData } =
    useLocalStorage("movies");

  const addNewId = () => {
    if (movie) {
      const local = !isLocalDataEmpty ? JSON.parse(localData) : [];
      const newLocalData = [...local, movie.category];
      handleLocalData("movies", JSON.stringify(newLocalData));
    }
  };

  useEffect(() => {
    if (localData || isLocalDataEmpty || movie) addNewId();
  }, [localData, isLocalDataEmpty, movie]);

  

  return (
    <MovieContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {movie && (
        <>
          <CardImgContainer>
            <MovieImgSingle src={movie.img} />
          </CardImgContainer>
          <CardInfoContainer>
            <Title>
              <UperText></UperText> {movie.title}
            </Title>
            <Text>
              <UperText>Year: </UperText> {movie.year}
            </Text>
            <Text>
              <UperText>Rating: </UperText> {movie.rating}
            </Text>
            <Text>
              <UperText>Description: </UperText>
              {movie.description}
            </Text>
            <Text>
              <UperText>Category: </UperText>
              {movie.category}
            </Text>
          </CardInfoContainer>
        </>
      )}
    </MovieContainer>
  );
}

export default Movie;