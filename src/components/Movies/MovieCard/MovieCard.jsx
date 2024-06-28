import {
    UperText,
    Card,
    CardImgContainer,
    CardInfoContainer,
    CardImg,
    Title,
    Text,
  } from "./MovieCard.style";
  
  function MovieCard({ title, year, rating, img, description, category, id }) {
    return (
      <Card to={`/movie/${id}`}>
        <CardImgContainer>
          <CardImg src={img} />
        </CardImgContainer>
        <CardInfoContainer>
          <Title>
            <UperText>Title:</UperText> {title}
          </Title>
          <Text>
            <UperText>Year:</UperText> {year}
          </Text>
          <Text>
            <UperText>Rating:</UperText> {rating}
          </Text>
          <Text>
            <UperText>Description:</UperText>
            {description}
          </Text>
          <Text>
            <UperText>Category:</UperText>
            {category}
          </Text>
        </CardInfoContainer>
      </Card>
    );
  }
  
  export default MovieCard;