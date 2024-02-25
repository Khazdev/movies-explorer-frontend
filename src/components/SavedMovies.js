import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import { filterMoviesBySearchText } from "../utils/moviesUtils";


export function SavedMovies({onDeleteMovie, savedMovies}) {
  const [shortMoviesFlag, setShortMoviesFlag] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //
  // }, [shortMoviesFlag]);


  const handleSetShortMoviesFlag = (isActive) => {
    setShortMoviesFlag(isActive)
  };

  const handleSearch = (searchText) => {
    if (savedMovies && savedMovies.length!==0) {
      const filteredMovies = filterMoviesBySearchText(searchText, savedMovies);
      setFilteredMovies(filteredMovies);
      setSearchQuery(searchText);
      localStorage.setItem("searchQuery", searchText);
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
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
        allMoviesFlag={false}
        isShortMoviesActive={shortMoviesFlag}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
      />
      <Footer></Footer>
    </>
  );
}

export default SavedMovies
