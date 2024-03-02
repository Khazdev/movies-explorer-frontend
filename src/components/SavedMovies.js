import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import {
  filterMoviesBySearchText,
  filterShortMovies,
} from "../utils/moviesUtils";

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
    setFilteredMovies(savedMovies);
  };
  const handleSetShortMoviesFlag = (isActive) => {
    setShortMoviesFlag(isActive);
  };

  const handleSearch = (searchText) => {
    if (savedMovies && savedMovies.length !== 0) {
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
          searchQuery === ""
            ? shortMoviesFlag
              ? filterShortMovies(savedMovies)
              : savedMovies
            : shortMoviesFlag
              ? filterShortMovies(
                  filterMoviesBySearchText(searchQuery, savedMovies),
                )
              : filterMoviesBySearchText(searchQuery, savedMovies)
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
