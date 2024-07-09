import { Box } from '@mui/material';
import React, { useContext } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import { AppContext } from './context';
import { NavLink } from 'react-router-dom';

const Movielist = () => {
  const { isLoading, movie, isError } = useContext(AppContext);

  return (
    <>
      <Navbar />

      {isError.show && <div style={{ color: 'red' }}>{isError.msg}</div>}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2%",
            padding: "3%",
          }}
        >
          {isLoading ? (
            <div style={{ color: 'white' }}>Loading...</div>
          ) : (
            movie.map((curMovie) => {
              const { imdbID } = curMovie;
              return (
                <NavLink key={imdbID} to={`movie/${imdbID}`} style={{ textDecoration: "none" }}>
                  <Cards curMovie={curMovie} />
                </NavLink>
              );
            })
          )}
        </Box>
      </Box>
    </>
  );
};

export default Movielist;
