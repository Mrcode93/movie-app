// Adjust the import path as needed
import MovieDetails from "./components/MovieDetails";

import { Routes, Route } from "react-router-dom";
import MainList from "./components/MainList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
