import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

interface RemoveFromFavouritesProps {
  movie: BaseMovieProps;
}

const RemoveFromFavouritesIcon: React.FC<RemoveFromFavouritesProps> = ({ movie }) => {
  const { removeFromFavourites } = useContext(MoviesContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromFavourites(movie);
  };

  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={onUserRequest}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;
