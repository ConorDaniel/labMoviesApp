import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import { BaseMovieProps } from "../types/interfaces";

const styles = {
  root: {
    padding: "20px",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
};

const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch failed:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container direction="column" spacing={4} sx={styles.root}>
      <Grid item>
        <Header title="Home Page" />
      </Grid>

      <Grid item>
        {loading ? (
          <div style={styles.loading}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={2}>
            <MovieList movies={movies} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default MovieListPage;
