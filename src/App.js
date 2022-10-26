import "./App.css";
// import "AddRecipe.module.css";

import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddRecipe from "./Pages/AddRecipe";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import SearchRecipe from "./components/SearchRecipe";
import ToggleTheme from "./components/ToggleTheme";
// Route to each individual recipe with params

// create page with a form  "/create";

function App() {
  const [recipes, setRecipes] = useState([]);
  const searchRef = useRef(null);
  const [theme, setTheme] = useState(true);
  return (
    <div className="App">
      <Navbar recipes={recipes} setRecipes={setRecipes} searchRef={searchRef} />
      <ToggleTheme />
      <div>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route
            path="/create"
            element={<AddRecipe setRecipes={setRecipes} />}
          />
          <Route
            path="/recipes/:title"
            element={<Recipe recipes={recipes} />}
          />
          <Route
            path="/search/:searchQuery"
            element={<SearchRecipe recipes={recipes} searchRef={searchRef} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
