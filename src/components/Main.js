import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";

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
      <Movies></Movies>
      {/*<SavedMovies></SavedMovies>*/}
      <Footer></Footer>
    </main>
  );
}

export default Main;
