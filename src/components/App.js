import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import NotFound from "./NotFound";
import { Route, Routes, useNavigate } from "react-router";
import { api } from "../utils/MainApi";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const navigate = useNavigate();
  const localLoggedIn = !!localStorage.getItem('loggedIn')
  const [isLoggedIn, setIsLoggedIn] = useState(localLoggedIn);
  const [currentUser, setCurrentUser] = useState({});
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getCurrentUser()
        .then((response) => {
          setCurrentUser(response);
          getSavedMovies()
        })
        .catch((error) => console.log(error));
    }

  }, [isLoggedIn]);

  useEffect(() => {
    handleValidateToken();
  }, []);

  const handleSignUp = async (name, email, password) => {
    await api.signUp(name, email, password)
      .then(() => {
        setTimeout(() => {
          navigate("/signin", {replace: true});
        }, 2000)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleSignIn = async (data) => {
    console.log(data)
    await api.signIn(data.email, data.password)
      .then((res) => {
        const jwt = res.token;
        localStorage.setItem('jwt', jwt)
        setIsLoggedIn(true)
        localStorage.setItem('loggedIn', "true")
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleValidateToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && !isLoggedIn) {
      api.getCurrentUser()
        .then(() => {
          localStorage.setItem('loggedIn', "true")
          setIsLoggedIn(true)
          navigate('/', {replace: true})
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("shortFilmToggle");
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn')
    navigate("/signin");
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
    api.createMovie(movieData)
      .then(async () => {
        await getSavedMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteMovie = (movieId) => {
    api.deleteMovie(movieId)
      .then(async () => {
        await getSavedMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSavedMovies = async () => {
    await api.getMovies()
      .then((movies) => {
        setMyMovies(movies);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path="/" element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path="/signup" element={<Register onRegister={handleSignUp}/>}/>
        <Route path="/signin" element={<Login onLogin={handleSignIn}/>}/>
        <Route path="/profile" element={<Profile onSignOut={handleSignOut}
                                                 currentUser={currentUser}
                                                 onUpdateUser={handleUpdateUser}/>}/>
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn}
                                               onSaveMovie={handleSaveMovie}
                                               onDeleteMovie={handleDeleteMovie}
                                               savedMovies={myMovies}/>}/>
        <Route path="/saved-movies" element={<SavedMovies onDeleteMovie={handleDeleteMovie}
                                                          savedMovies={myMovies}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
