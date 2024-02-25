import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import { filterMoviesBySearchText } from "../utils/moviesUtils";


export function SavedMovies({onDeleteMovie, savedMovies}) {
  const [shortMoviesFlag, setShortMoviesFlag] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSetShortMoviesFlag = (isActive) => {
    setShortMoviesFlag(isActive)
  };

  const handleSearch = (searchText) => {
    if (savedMovies && savedMovies.length!==0) {
      const filteredMovies = filterMoviesBySearchText(searchText, savedMovies);
      setFilteredMovies(filteredMovies);
      setSearchQuery(searchText);
    }
  };

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <SearchForm onFilterShortMovies={handleSetShortMoviesFlag}
                  onSearch={handleSearch}
                  searchQuery={searchQuery}
                  isFilterShortMovies={shortMoviesFlag}
      ></SearchForm>
      <MoviesCardList
        movies={filteredMovies}
        allMoviesFlag={false}
        isShortMoviesActive={shortMoviesFlag}
        onDeleteMovie={onDeleteMovie}
      />
      <Footer></Footer>
    </>
  );
}

export default SavedMovies
