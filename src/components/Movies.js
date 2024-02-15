import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";

export function Movies() {

  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList allMoviesFlag={true}></MoviesCardList>
      <Preloader></Preloader>
    </>
  );
}

export default Movies
