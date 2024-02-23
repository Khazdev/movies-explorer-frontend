import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Header from "./Header";
import Footer from "./Footer";

export function SavedMovies() {

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <SearchForm></SearchForm>
      <MoviesCardList allMoviesFlag={true}></MoviesCardList>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies
