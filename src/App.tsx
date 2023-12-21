import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/auth";
import Home from "./pages/home";
import Rated from "./pages/rated";
import Movie from "./pages/Movie/Movie";
import TvShow from "./pages/TvShow/TvShow";

function App() {
  return (
    <div className="MainContainer">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvshow/:id" element={<TvShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
