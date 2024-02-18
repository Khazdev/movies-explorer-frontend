import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import React from "react";

export function SavedMovies() {

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <SearchForm></SearchForm>
      <MoviesCardList allMoviesFlag={false}></MoviesCardList>
    </>
  );
}

export default SavedMovies
