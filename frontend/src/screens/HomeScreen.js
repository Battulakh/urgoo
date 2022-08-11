import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import { useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUIST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, movie: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, movies }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/movies");
      } catch (err) {
        dispatch({ type: "FETCH_FAIL" });
      }

      setMovies(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Гарж буй кино</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie" key={movie.slug}>
            <Link to={`/movie/${movie.slug}`}>
              <img src={movie.image} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
