import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_URL = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MovieComp = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
        setIsLoading(false);
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({
        show: true,
        msg: "An error occurred while fetching data.",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovie(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError.show) {
    return <div>{isError.msg}</div>;
  }

  const imdbRating = movie.Ratings && movie.Ratings.find(rating => rating.Source === "Internet Movie Database")?.Value;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          height: "60%",
          boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "100%",
          }}
        >
          <img src={movie.Poster} alt={movie.Title} height="100%" />
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            padding: "2%",
          }}
        >
          <Typography variant="h4">{movie.Title}</Typography>
          <Typography variant="h6">Actors - {movie.Actors}</Typography>
          <Typography variant="h6">Released Date - {movie.Released}</Typography>
          <Typography variant="h6">Genre - {movie.Genre}</Typography>
          <Typography variant="h6">Director - {movie.Director}</Typography>
          <Typography variant="h6">IMDb Rating - {imdbRating}</Typography>
          <Typography variant="h6">Country - {movie.Country}</Typography>
          <Typography>Plot - {movie.Plot}</Typography>
          <Link to="/" >
          <Button >Go Back</Button>

          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieComp;
