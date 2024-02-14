import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";

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
    </main>
  );
}

export default Main;
