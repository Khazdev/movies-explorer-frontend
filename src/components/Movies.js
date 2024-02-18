import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import Header from "./Header";
import React from "react";

export function Movies() {

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <SearchForm></SearchForm>
      <MoviesCardList allMoviesFlag={true}></MoviesCardList>
      <Preloader></Preloader>
    </>
  );
}

export default Movies
