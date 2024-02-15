import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

export function SavedMovies() {

  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList allMoviesFlag={false}></MoviesCardList>
    </>
  );
}

export default SavedMovies
