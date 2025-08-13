import { useEffect, useState } from "react";

import {
  Container,
  MoviesGrid,
} from "./styles";
import { Spinner } from "../../Components/Spinner";
import { MoviesService, type IMovies } from "../../Service/Movies";
import { MovieCard } from "../../Components/MovieCard";
import EmptyComponent from "../../Components/Empty";
import emptyImg from "../../assets/empty.png"


export function Home() {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const { products } = await MoviesService.getMovies()
      setMovies(products)

    } catch (error) {

    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  if (loading) {
    return (
      <Container>
        <Spinner size={50} />
      </Container>
    );
  }

  return (
    <Container>
      {movies.length > 0 && !loading ? (
        <MoviesGrid>
          {movies.map(({ id, title, price, image }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
            />
          ))}
        </MoviesGrid>
      ) : (
        <EmptyComponent
          title="Parece que não há nada por aqui :("
          handleClick={fetchItems}
          titleButtton="Recarregar página"
          img={emptyImg} />
      )}
    </Container>
  );
}
