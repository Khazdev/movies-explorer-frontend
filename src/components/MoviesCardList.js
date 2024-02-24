import MoviesCard from "./MoviesCard";
import React, { useEffect, useState } from "react";

export function MoviesCardList({
                                 movies,
                                 allMoviesFlag,
                                 displayedCards,
                                 handleLoadMore,
                                 isShortMoviesActive,
                                 onSaveMovie,
                                 onDeleteMovie,
                                 savedMovies,
                                 error
                               }) {

  const [moviesToRender, setMoviesToRender] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (allMoviesFlag) {
      if (isShortMoviesActive) {
        setMoviesToRender(movies.filter((movie) => movie.duration < 40))
      } else {
        setMoviesToRender(movies)
      }
    }

  }, [isShortMoviesActive, movies]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section className="movies">

      {error ? (
        <div className="movies__message movies__message_error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и
          попробуйте ещё раз.
        </div>
      ):(
        <>
          {allMoviesFlag && moviesToRender && moviesToRender.length===0 ? (
            <div className="movies__message">Ничего не найдено</div>
          ):(
            <>
              {console.log(savedMovies)}
              {!allMoviesFlag ? (
                <ul className="movies__grid">
                  {savedMovies.map((movie) => (
                    <MoviesCard
                      key={movie._id}
                      movie={movie}
                      allMoviesFlag={allMoviesFlag}
                      onDeleteMovie={onDeleteMovie}
                      movieId={movie._id}
                      isLiked={true}
                    />
                  ))}
                </ul>
              ):(
                <>
                  <ul className="movies__grid">
                    {moviesToRender.slice(0, displayedCards).map((movie) => {
                      const filteredMovies =
                        savedMovies.length > 0 &&
                        savedMovies.filter((savedMovie) => savedMovie.movieId===movie.id);
                      const movieId = filteredMovies.length > 0 ? filteredMovies[0]._id:undefined;
                      return (
                        <MoviesCard
                          key={movie.id}
                          movie={movie}
                          allMoviesFlag={allMoviesFlag}
                          onSaveMovie={onSaveMovie}
                          onDeleteMovie={onDeleteMovie}
                          movieId={movieId}
                          isLiked={!!movieId}
                        />
                      );
                    })}
                  </ul>
                  {windowWidth >= 990 && displayedCards < moviesToRender.length && (
                    <button className="movies__more-button" onClick={() => handleLoadMore(3 - displayedCards % 3)}>
                      Ещё
                    </button>
                  )}
                  {windowWidth >= 768 && windowWidth < 990 && displayedCards < moviesToRender.length && (
                    <button className="movies__more-button" onClick={() => handleLoadMore(2 - displayedCards % 2)}>
                      Ещё
                    </button>
                  )}
                  {windowWidth >= 320 && windowWidth < 768 && displayedCards < moviesToRender.length && (
                    <button className="movies__more-button" onClick={() => handleLoadMore(2)}>
                      Ещё
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
