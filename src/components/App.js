import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import NotFound from "./NotFound";
import { Route, Routes, useNavigate } from "react-router";
import { api } from "../utils/MainApi";
import { useCallback, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const localLoggedIn = !!localStorage.getItem("loggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(localLoggedIn);
  const [currentUser, setCurrentUser] = useState({});
  const [myMovies, setMyMovies] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    handleValidateToken();
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   handleValidateToken();
  // }, []);

  // useEffect(() => {
  //   if (myMovies) {
  //     setIsAppLoaded(true);
  //   }
  // }, [myMovies]);

  // useEffect(() => {
  //   if (!myMovies || (myMovies && myMovies.length === 0)) {
  //     getSavedMovies();
  //   }
  // }, []);

  const handleSignUp = async (data, setError) => {
    await api
      .signUp(data.name, data.email, data.password)
      .then(() => {
        handleSignIn(data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleSignIn = async (data, setError) => {
    await api
      .signIn(data.email, data.password)
      .then((res) => {
        const jwt = res.token;
        localStorage.setItem("jwt", jwt);
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", "true");
        navigate("/movies");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleValidateToken = useCallback(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && !isLoggedIn) {
      api
        .getCurrentUser()
        .then((res) => {
          localStorage.setItem("loggedIn", "true");
          setCurrentUser(res);
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }

  const handleUpdateUser = (email, name) => {
    api
      .updateUser(email, name)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSaveMovie = (movieData) => {
    api
      .createMovie(movieData)
      .then((res) => {
        setMyMovies([res, ...myMovies]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteMovie = (movieId) => {
    api
      .deleteMovie(movieId)
      .then((res) => {
        const moviesAfterDelete = myMovies.filter(
          (movie) => movie._id !== movieId,
        );
        setMyMovies(moviesAfterDelete);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSavedMovies = async () => {
    await api
      .getMovies()
      .then((movies) => {
        setMyMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Main isLoggedIn={isLoggedIn} windowWidth={windowWidth} />}
        ></Route>
        <Route
          path="/signup"
          element={
            <Register onRegister={handleSignUp} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/signin"
          element={<Login onLogin={handleSignIn} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              windowWidth={windowWidth}
            />
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              savedMovies={myMovies}
              windowWidth={windowWidth}
            />
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              onDeleteMovie={handleDeleteMovie}
              savedMovies={myMovies}
              windowWidth={windowWidth}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
