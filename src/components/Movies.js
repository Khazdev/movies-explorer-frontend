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
  const [filteredMovies, setFilteredMovies] = useState(null);
  const russianRegex = /[а-яА-ЯЁё]/;
  const englishRegex = /[a-zA-Z]/;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setDisplayedCards(12);
    } else if (screenWidth >= 768) {
      setDisplayedCards(8);
    } else if (screenWidth >= 320) {
      setDisplayedCards(5);
    }
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

  function filterMoviesBySearchText(searchText) {
    return allMovies.filter((movie) => {
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

  function searchMovies() {
    fetch(`https://api.nomoreparties.co/beatfilm-movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed with status code " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("movies", JSON.stringify(data));
        setAllMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching allMovies:', error);
        setLoading(false);
        setError(error)
      });
  }

  const handleSearch = (searchText) => {

    if (allMovies!=null) {
      const filteredMovies = filterMoviesBySearchText(searchText);
      setFilteredMovies(filteredMovies);
    } else {
      setLoading(true);
      searchMovies();
    }
  };
  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <SearchForm onSearch={handleSearch}/>
      <Preloader
        data={filteredMovies}
        loading={loading}
        error={error}
      >
      </Preloader>
      {filteredMovies &&
        <MoviesCardList
          movies={filteredMovies}
          allMoviesFlag={true}
          displayedCards={displayedCards}
          handleLoadMore={handleLoadMore}
        />
      }

      <Footer></Footer>
    </>
  );
}

export default Movies
