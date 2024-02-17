import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Register from "./Profile";

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
      {/*<Movies></Movies>*/}
      {/*<SavedMovies></SavedMovies>*/}
      {/*<Footer></Footer>*/}
      <Register></Register>
    </main>
  );
}

export default Main;
