import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseMovieProps } from "../../types/interfaces";

interface AddToFavouritesProps {
  movie: BaseMovieProps;
}

const AddToFavouritesIcon: React.FC<AddToFavouritesProps> = ({ movie }) => {
  const { addToFavourites } = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
