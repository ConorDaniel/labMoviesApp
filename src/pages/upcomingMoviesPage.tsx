import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpComingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage: React.FC = () => {
  const { data: movies, isLoading, isError, error } = useQuery(
    "upcoming",
    getUpComingMovies
  );

  const { addToFavourites } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>Error: {(error as Error).message}</h1>;
  }

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies || []}
      action={(movie) => <AddToPlaylistIcon />}
    />
  );
};

export default UpcomingMoviesPage;
