import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import Footer from "./Footer";

function Main() {

  return (
    <main>
      <Header
        isSignedIn={false}
      ></Header>
      {/*<Hero></Hero>*/}
      {/*<About></About>*/}
      {/*<Tech></Tech>*/}
      {/*<AboutMe></AboutMe>*/}
      {/*<Portfolio></Portfolio>*/}
      {/*<Footer></Footer>*/}
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Preloader></Preloader>
      <Footer></Footer>
    </main>
  );
}

export default Main;
