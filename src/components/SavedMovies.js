import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { filterMoviesBySearchText } from "../utils/moviesUtils";

export function SavedMovies({ onDeleteMovie, savedMovies }) {
  const [shortMoviesFlag, setShortMoviesFlag] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, []);

  useEffect(() => {}, [filteredMovies]);

  useEffect(() => {}, [shortMoviesFlag]);

  const handleDeleteMovie = (movieId) => {
    onDeleteMovie(movieId);
    setFilteredMovies(filteredMovies.filter((movie) => movie._id !== movieId));
  };
  const handleSetShortMoviesFlag = (isActive) => {
    setShortMoviesFlag(isActive);
  };

  const handleSearch = (searchText) => {
    if (savedMovies && savedMovies.length !== 0) {
      const filteredMovies = filterMoviesBySearchText(searchText, savedMovies);
      setFilteredMovies(filteredMovies);
      setSearchQuery(searchText);
    }
  };

  return (
    <>
      <Header isSignedIn={true}></Header>
      <SearchForm
        onFilterShortMovies={handleSetShortMoviesFlag}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        isFilterShortMovies={shortMoviesFlag}
      ></SearchForm>
      <MoviesCardList
        movies={
          shortMoviesFlag
            ? filteredMovies.filter((movie) => movie.duration < 40)
            : filteredMovies
        }
        allMoviesFlag={false}
        isShortMoviesActive={shortMoviesFlag}
        onDeleteMovie={handleDeleteMovie}
      />
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
