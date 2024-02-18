import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/saved-movies" element={<SavedMovies/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
