import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Tech from "./Tech";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function Main({isLoggedIn, windowWidth}) {
  return (
    <>
      <Header isSignedIn={isLoggedIn} windowWidth={windowWidth}></Header>
      <main className="main">
        <Hero></Hero>
        <About></About>
        <Tech></Tech>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Main;
