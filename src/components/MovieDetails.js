import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { motion } from "framer-motion";
// import "./MovieDetails.scss"; // Import the CSS file
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
const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=`,
      params: { language: "ar" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer "  },
    };

    try {
      const response = await axios.request(options);
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="container movie-details"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="movie-header">
        <h1>{movie.original_title}</h1>
        <p className="release-date">{movie.release_date}</p>
      </div>
      <div className="item movie-content" key={movie.id} variants={item}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
          className="movie-poster"
        />
        <div className="movie-info">
          <p className="overview">{movie.overview}</p>
          <p className="rating">
            <span className="rating-value">{movie.vote_average}</span>/10 (
            {movie.vote_count} votes)
          </p>
          <p className="runtime">Runtime: {movie.runtime} minutes</p>
          <div className="genres">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span className="genre" key={genre.id}>
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
