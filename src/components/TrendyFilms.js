// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import Loader from "./Loader";

// const TrendyFilms = () => {
//   const [trendy, setTrendy] = useState({ results: [] });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getTrendyFilms = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/day",
//         {
//           headers: {
//             accept: "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjQ5MDZjYTc5MmEyNmRiYWMwYjZiZTNiN2M3NmU4YyIsInN1YiI6IjY0NjFmODY0NmUwZDcyMDExZWFiMDFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7wd_BeHKnykuNolGHzbXe2tszF_Rev19HtD51fhyuI",
//           },
//         }
//       );
//       setTrendy(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getTrendyFilms();
//   }, []); // Empty dependency array to run once on mount

//   if (loading) {
//     return <Loader />;
//   }
//   return (
//     <div className="trendy-films">
//       <div className="slider">
//         <div className="slide-track">
//           {trendy.results.length > 0 ? (
//             trendy.results.map((movie) => (
//               <div className="slide" key={movie.id}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                   alt={movie.title || movie.name}
//                 />
//               </div>
//             ))
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendyFilms;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

import StarIcon from "@mui/icons-material/Star";

const TrendyFilms = () => {
  const [trendy, setTrendy] = useState({ results: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTrendyFilms = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjQ5MDZjYTc5MmEyNmRiYWMwYjZiZTNiN2M3NmU4YyIsInN1YiI6IjY0NjFmODY0NmUwZDcyMDExZWFiMDFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7wd_BeHKnykuNolGHzbXe2tszF_Rev19HtD51fhyuI",
          },
        }
      );
      setTrendy(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrendyFilms();
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="trendy-films">
      <div className="slider">
        <div className="slide-track">
          {trendy.results.length > 0 ? (
            trendy.results.map((movie, index) => (
              <div
                className="slide"
                key={movie.id}
                style={{ animationDelay: `${index * 10}s` }}
              >
                <div className="overlay">
                  <h2 className="movie-title">{movie.title || movie.name}</h2>
                  <p className="movie-overview">{movie.overview}</p>
                  <p className="movie-vote">{movie.vote_average}</p>
                  <StarIcon />
                  {/* <p className="movie-vote">{movie.vote_count}</p> */}
                  <p className="movie-date">{movie.release_date}</p>
                  {/* <p className="movie-vote">{movie.popularity}</p> */}
                  {/* <p className="movie-vote">{movie.genre_ids}</p> */}
                  {/* <p className="movie-vote">{movie.adult}</p> */}
                  {/* <p className="movie-vote">{movie.video}</p> */}
                  {/* <p className="movie-vote">{movie.media_type}</p> */}
                  {/* <p className="movie-vote">{movie.first_air_date}</p> */}
                  <p className="movie-genre">{movie.genre_ids}</p>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title || movie.name}
                />
              </div>
            ))
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendyFilms;
