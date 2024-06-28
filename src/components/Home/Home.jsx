import { HomeContainer, HomeImageBackground, HomeText } from "./Home.style";

function Home() {
  return (
    <HomeContainer>
      <HomeImageBackground
        src={
          "https://static01.nyt.com/images/2020/09/14/business/14movie-tenet/merlin_176507883_99c30ad7-2cc1-4071-8cc2-52866fb7b05c-superJumbo.jpg"
        }
      />
      <HomeText>Bun venit pe pagina mea de Movies!</HomeText>
    </HomeContainer>
  );
}

export default Home;