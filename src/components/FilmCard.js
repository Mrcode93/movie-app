import { useEffect } from "react";

export default function FilmCard({ movie }) {
  //   console.log(movie);
  //   useEffect(() => {
  //     console.log("movie", movie);
  //   }, [movie]);
  return (
    <div className="film-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      {/* <p>{movie.release_date}</p> */}
      {/* <h1 className="title">{movie.title}</h1> */}
      {/* <p className="overview">{}</p> */}
    </div>
  );
}
