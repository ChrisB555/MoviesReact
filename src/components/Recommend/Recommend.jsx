import { useEffect, useState } from "react";
import useFetchMovies from "../../hooks/useFetchMovie";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AddButton as ResetButton } from "../Edit/Edit.style";
import { MovieImgSingle } from "../Movie/Movie.style";
import {
  CardImgContainer,
  CardInfoContainer,
  Text,
  Title,
  UperText,
} from "../Movies/MovieCard/MovieCard.style";
import { RecomandContainer } from "./Recomand.style";

const getTopOccurrences = (movie) => {
  const counts = movie.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);
};

const getTopMovieByCategory = (movies, localData) => {
  const topCategories = getTopOccurrences(localData);

  for (const category of topCategories) {
    const movie = movies.find((movie) => movie.category === category);
    if (movie) {
      return movie;
    }
  }

  return null;
};

function Recomand() {
  const [movie, setMovie] = useState({});

  const { movies, loading, error } = useFetchMovies();
  const { resetLocalData, localData } = useLocalStorage("movies");

  useEffect(() => {
    if (localData !== null && movies) {
      const topMovie = getTopMovieByCategory(movies, JSON.parse(localData));
      setMovie(topMovie);
    }
  }, [localData, movies]);

  return (
    <RecomandContainer>
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
      <ResetButton onClick={() => resetLocalData()}> Reset</ResetButton>
    </RecomandContainer>
  );
}

export default Recomand;