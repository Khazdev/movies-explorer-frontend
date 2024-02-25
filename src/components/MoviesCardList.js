import MoviesCard from "./MoviesCard";
import React, { useCallback, useEffect, useState } from "react";

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

  const [moviesToRender, setMoviesToRender] = useState(movies);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (isShortMoviesActive) {
      setMoviesToRender(movies.filter((movie) => movie.duration < 40))
    } else {
      setMoviesToRender(movies)
    }
  }, [isShortMoviesActive, movies]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleDeleteMovie = (movieId) => {
    onDeleteMovie(movieId);
    if (!allMoviesFlag){
    setMoviesToRender(moviesToRender.filter((movie) => movie._id !== movieId));
    }
  };
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
              {!allMoviesFlag ? (
                <ul className="movies__grid">
                  {moviesToRender.map((movie) => (
                    <MoviesCard
                      key={movie._id}
                      movie={movie}
                      allMoviesFlag={allMoviesFlag}
                      onDeleteMovie={handleDeleteMovie}
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
                          onDeleteMovie={handleDeleteMovie}
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
