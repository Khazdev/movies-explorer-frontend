import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import {
  filterMoviesBySearchText,
  filterShortMovies,
} from "../utils/moviesUtils";

export function SavedMovies({ onDeleteMovie, savedMovies, windowWidth }) {
  const [shortMoviesFlag, setShortMoviesFlag] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteMovie = (movieId) => {
    onDeleteMovie(movieId);
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
      <main className="main">
      <Header isSignedIn={true} windowWidth={windowWidth}></Header>
      <SearchForm
        onFilterShortMovies={handleSetShortMoviesFlag}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        isFilterShortMovies={shortMoviesFlag}
        isFetchLoading={false}
      ></SearchForm>
      {savedMovies && (
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
          windowWidth={windowWidth}
        />
      )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
