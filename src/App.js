import "./App.css";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Edit from "./components/Edit/Edit";
import Movie from "./components/Movie/Movie";
import MoviesEditDelete from "./components/MoviesEditDelete/MoviesEditDelete";
import Recommend from "./components/Recommend/Recommend";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/edit-delete" element={<MoviesEditDelete />} />
        <Route path="/movie/:id" element={<Movie/>}></Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
