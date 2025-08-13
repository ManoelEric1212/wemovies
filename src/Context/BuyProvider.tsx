
import type { IMovies } from "../Service/Movies";
import { createContext, useContext, useState, type ReactNode } from "react";

interface BuyValues {
  moviesSelected: IMovies[];
  addToCart: (movie: IMovies) => void;
  removeFromCart: (movieId: number) => void;
  isInCart: (movieId: number) => boolean;
  resetCart: () => void;
}

const BuyContext = createContext<BuyValues>({} as BuyValues)

interface BuyProviderProps {
  children: ReactNode;
}

export function BuyProvider({ children }: BuyProviderProps) {

  const [moviesSelected, setMoviesSelected] = useState<IMovies[]>([]);

  const addToCart = (movie: IMovies) => {
    setMoviesSelected((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromCart = (movieId: number) => {
    setMoviesSelected((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInCart = (movieId: number) => {
    return moviesSelected.some((m) => m.id === movieId);
  };

  const resetCart = () => {
    setMoviesSelected([]);
  }


  return (
    <BuyContext.Provider
      value={{
        moviesSelected,
        addToCart,
        removeFromCart,
        isInCart,
        resetCart,
      }}
    >
      {children}
    </BuyContext.Provider>
  );

}

export function useBuy() {
  const values = useContext(BuyContext);
  return values;
}