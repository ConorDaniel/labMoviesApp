import React, { useContext, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

const RemoveFromMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
  const { removeFromMustWatch } = useContext(MoviesContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromMustWatch(movie);
  };

  return (
    <IconButton aria-label="remove from must watch" onClick={handleClick}>
      <PlaylistRemoveIcon color="secondary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;
