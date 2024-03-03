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
  const [isFetchLoading, setIsFetchLoading] = useState(false);

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

  const handleSignUp = async (data, setError) => {
    setIsFetchLoading(true)
    await api
      .signUp(data.name, data.email, data.password)
      .then(() => {
        handleSignIn(data);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      }).finally(()=>{
        setIsFetchLoading(false)
      });
  };

  const handleSignIn = async (data, setError) => {
    setIsFetchLoading(true)
    await api
      .signIn(data.email, data.password)
      .then((res) => {
        const jwt = res.token;
        localStorage.setItem("jwt", jwt);
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", "true");
        setError("");
        navigate("/movies");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      }).finally(()=>{
        setIsFetchLoading(false)
      });
  };

  const handleValidateToken = useCallback(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getCurrentUser()
        .then((res) => {
          localStorage.setItem("loggedIn", "true");
          setCurrentUser(res);
          setIsLoggedIn(true);
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

  const handleUpdateUser = async (email, name, setError) => {
    setIsFetchLoading(true)
      await api
        .updateUser(email, name)
        .then((data) => {
          setCurrentUser(data);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        }).finally(() => {
          setIsFetchLoading(false)
        });
  };

  const handleSaveMovie = async (movieData) => {
    await api
      .createMovie(movieData)
      .then((res) => {
        setMyMovies([res, ...myMovies]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteMovie = async (movieId) => {
    await api
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
            <Register onRegister={handleSignUp} isLoggedIn={isLoggedIn} isFetchLoading={isFetchLoading}/>
          }
        />
        <Route
          path="/signin"
          element={<Login onLogin={handleSignIn} isLoggedIn={isLoggedIn} isFetchLoading={isFetchLoading}/>}
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
              isFetchLoading={isFetchLoading}
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
              isFetchLoading={isFetchLoading}
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
