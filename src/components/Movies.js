import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export function Movies() {
  const [displayedCards, setDisplayedCards] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [shortMoviesFlag, setShortMoviesFlag] = useState(!!localStorage.getItem("shortFilmToggle"));
  const [filteredMovies, setFilteredMovies] = useState(null);
  const russianRegex = /[а-яА-ЯЁё]/;
  const englishRegex = /[a-zA-Z]/;

  const handleSetShortMoviesFlag = (isActive) => {
    setShortMoviesFlag(isActive)
  };

  function generateDisplayCardsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setDisplayedCards(12);
    } else if (screenWidth >= 768) {
      setDisplayedCards(8);
    } else if (screenWidth >= 320) {
      setDisplayedCards(5);
    }
  }

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

  function filterMoviesBySearchText(searchText, movies) {

    return movies.filter((movie) => {
      const lowerCaseSearchText = searchText.toLowerCase();
      if (russianRegex.test(searchText)) {
        console.log("isRussianRegexp")
        return (
          movie.nameRU.toLowerCase().includes(lowerCaseSearchText)
        );
      } else if (englishRegex.test(searchText)) {
        console.log("isEnglishRegex")
        return (
          movie.nameEN.toLowerCase().includes(lowerCaseSearchText)
        );
      } else if (!isNaN(searchText)) {
        return (
          movie.nameRU.toLowerCase().includes(lowerCaseSearchText) ||
          movie.nameEN.toLowerCase().includes(lowerCaseSearchText)
        );
      } else {
        return false;
      }
    });
  }

  async function searchMovies(searchText) {
    await fetch(`https://api.nomoreparties.co/beatfilm-movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed with status code " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("movies", JSON.stringify(data));
        setAllMovies(data);
        const filteredMovies = filterMoviesBySearchText(searchText, data);
        setFilteredMovies(filteredMovies);
        setLoading(false);
        localStorage.setItem("searchQuery", searchText);
        // localStorage.setItem("shortFilmToggle", JSON.stringify(shortFilmToggle));
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
        isSignedIn={true}
      ></Header>
      <SearchForm
        onSearch={handleSearch}
        onFilterShortMovies={handleSetShortMoviesFlag}
      />
      <Preloader
        data={filteredMovies}
        loading={loading}
        error={error}
      >
      </Preloader>
      {!loading && filteredMovies &&
        <MoviesCardList
          movies={filteredMovies}
          allMoviesFlag={true}
          displayedCards={displayedCards}
          handleLoadMore={handleLoadMore}
          isShortMoviesActive={shortMoviesFlag}
        />
      }
      <Footer></Footer>
    </>
  );
}

export default Movies
