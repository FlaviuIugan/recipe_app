import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RecipeList from "./RecipeList";
import styles from "../Pages/Home.module.css";

export default function SearchRecipe({ recipes, searchRef }) {
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const recipe = [];

  const handleClick = () => {
    searchRef.current.value = "";
    navigate("/");
  };

  const searchState = recipes.map((element, i) => {
    if (element.title.includes(searchQuery)) {
      return recipe.push(element);
    }
  });

  useEffect(() => {
    if (searchRef.current.baseURI.length === 30) {
      navigate("/");
    }
  }, [searchQuery]);

  return (
    <div className={styles.recipes}>
      {recipe.length &&
        recipe.map((element, i) => <RecipeList id={i} recipe={element} />)}

      {!recipe.length && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ alignContent: "center" }}> Not found!</h1>
          <br />
          <button onClick={handleClick} style={{ alignContent: "center" }}>
            Home
          </button>
        </div>
      )}
    </div>
  );
}
