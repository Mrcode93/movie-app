import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions";
import FilmCard from "../components/FilmCard";
import Header from "./Header";
import TrendyFilms from "./TrendyFilms";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const MainList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="main-list">
      <Header />
      <TrendyFilms />
      <div
        className="container films"
        // variants={container}
        // initial="hidden"
        // animate="visible"
      >
        {error ? (
          <p>Error: {error}</p>
        ) : movies && Array.isArray(movies.results) ? (
          movies.results.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="item"
              variants={item}
            >
              <FilmCard movie={movie} key={movie.id} />
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Stack
        spacing={2}
        alignItems="center"
        style={{
          marginTop: "1rem",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <Pagination
          count={movies.total_pages}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={(event, value) => {
            dispatch(getMovies(value));
          }}
          style={{ color: "black" }}
          page={movies.page}
        />
      </Stack>
    </div>
  );
};

export default MainList;
