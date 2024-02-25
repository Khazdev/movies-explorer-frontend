import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { moviesApi } from "../utils/MoviesApi";
import { filterMoviesBySearchText } from "../utils/moviesUtils";

export function Movies({isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies}) {
  const [displayedCards, setDisplayedCards] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [shortMoviesFlag, setShortMoviesFlag] = useState(JSON.parse(localStorage.getItem("shortFilmToggle")));
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  const handleSetShortMoviesFlag = (isActive) => {
    localStorage.setItem("shortFilmToggle", JSON.stringify(isActive))
    setShortMoviesFlag(isActive)
  };

  function generateDisplayCardsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 990) {
      setDisplayedCards(12);
    } else if (screenWidth >= 768) {
      setDisplayedCards(8);
    } else if (screenWidth >= 320) {
      setDisplayedCards(5);
    }
  }

  useEffect(() => {
    const searchText = localStorage.getItem("searchQuery");
    if (searchText) {
      setSearchQuery(searchText);
    }
  }, []);

  useEffect(() => {
    const filteredMovies = localStorage.getItem("filteredMovies");
    if (filteredMovies) {
      setFilteredMovies(JSON.parse(filteredMovies));
    }
  }, []);

  useEffect(() => {
    generateDisplayCardsCount();
  }, []);

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setAllMovies(JSON.parse(savedMovies));
    }
  }, []);

  const handleLoadMore = (additionalLoadCount) => {
    setDisplayedCards(displayedCards + additionalLoadCount);
  };

  async function searchMovies(searchText) {
    await moviesApi.searchMovies()
      .then((data) => {
        localStorage.setItem("movies", JSON.stringify(data));
        setAllMovies(data);
        const filteredMovies = filterMoviesBySearchText(searchText, data);
        setFilteredMovies(filteredMovies);
        setLoading(false);
        setSearchQuery(searchText);
        localStorage.setItem("searchQuery", searchText);
        localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
        return filteredMovies;
      })
      .catch((error) => {
        console.error('Error fetching allMovies:', error);
        setLoading(false);
        setError(error)
      });
  }

  const handleSearch = (searchText) => {
    if (allMovies && allMovies.length!==0) {
      const filteredMovies = filterMoviesBySearchText(searchText, allMovies);
      setFilteredMovies(filteredMovies);
      generateDisplayCardsCount();
      localStorage.setItem("searchQuery", searchText);
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    } else {
      setLoading(true);
      searchMovies(searchText).then(r => console.log(r));
    }
  };
  return (
    <>
      <Header
        isSignedIn={isLoggedIn}
      ></Header>
      <SearchForm
        onSearch={handleSearch}
        onFilterShortMovies={handleSetShortMoviesFlag}
        searchQuery={searchQuery}
        isFilterShortMovies={shortMoviesFlag}
      />
      <Preloader
        loading={loading}
      >
      </Preloader>

      {!loading && filteredMovies &&
        <MoviesCardList
          movies={filteredMovies}
          allMoviesFlag={true}
          displayedCards={displayedCards}
          handleLoadMore={handleLoadMore}
          isShortMoviesActive={shortMoviesFlag}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
          error={error}
        />
      }
      <Footer></Footer>
    </>
  );
}

export default Movies
