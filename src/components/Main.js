import React from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import Hero from "./Hero";
import About from "./About";
import Tech from "./Tech";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Profile from "./Profile";

function Main() {

  return (
    <main>
      <Header
        isSignedIn={true}
      ></Header>
      <Hero></Hero>
      <About></About>
      <Tech></Tech>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Footer></Footer>
      {/*<Movies></Movies>*/}
      {/*<SavedMovies></SavedMovies>*/}
      {/*<Footer></Footer>*/}
      {/*<NotFound></NotFound>*/}
      {/*<Profile></Profile>*/}
      {/*<Register></Register>*/}
      {/*<Login></Login>*/}
    </main>
  );
}

export default Main;
