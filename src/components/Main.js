import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Tech from "./Tech";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

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
    </main>
  );
}

export default Main;
