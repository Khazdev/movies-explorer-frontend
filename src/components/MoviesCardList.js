import MoviesCard from "./MoviesCard";
import React from "react";

export function MoviesCardList({
  movies,
  allMoviesFlag,
  displayedCards,
  handleLoadMore,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  error,
  windowWidth,
}) {
  return (
    <section className="movies">
      {error ? (
        <div className="movies__message movies__message_error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </div>
      ) : (
        <>
          {allMoviesFlag && movies && movies.length === 0 ? (
            <div className="movies__message">Ничего не найдено</div>
          ) : (
            <>
              {!allMoviesFlag ? (
                <ul className="movies__grid">
                  {movies &&
                    movies.map((movie) => (
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
              ) : (
                <>
                  <ul className="movies__grid">
                    {movies.slice(0, displayedCards).map((movie) => {
                      const filteredMovies =
                        savedMovies &&
                        savedMovies.filter((savedMovie) => {
                          return savedMovie.movieId === movie.id;
                        });
                      const movieId =
                        filteredMovies.length > 0
                          ? filteredMovies[0]._id
                          : undefined;
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
                  {windowWidth >= 990 && displayedCards < movies.length && (
                    <button
                      className="movies__more-button"
                      onClick={() => handleLoadMore(3 - (displayedCards % 3))}
                    >
                      Ещё
                    </button>
                  )}
                  {windowWidth >= 768 &&
                    windowWidth < 990 &&
                    displayedCards < movies.length && (
                      <button
                        className="movies__more-button"
                        onClick={() => handleLoadMore(2 - (displayedCards % 2))}
                      >
                        Ещё
                      </button>
                    )}
                  {windowWidth >= 320 &&
                    windowWidth < 768 &&
                    displayedCards < movies.length && (
                      <button
                        className="movies__more-button"
                        onClick={() => handleLoadMore(2)}
                      >
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
