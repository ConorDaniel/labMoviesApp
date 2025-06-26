import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void; 
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(
  initialContextState
);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [myReviews, setMyReviews] = useState<Record<number, Review>>({}); // NEW

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    if (!movie || typeof movie.id !== 'number') {
      console.warn("Invalid movie passed to addToFavourites:", movie);
      return;
    }
  
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    setMyReviews((prevReviews) => ({
      ...prevReviews,
      [movie.id]: review,
    }));
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
