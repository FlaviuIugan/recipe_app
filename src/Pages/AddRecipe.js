import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe({ setRecipes }) {
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);
  const titleRef = useRef(null);
  const recipeMethodRef = useRef(null);
  const cookingTimeRef = useRef(null);
  const ingredientsRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ran");
    setRecipes((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        ingredients,
        method: recipeMethodRef.current.value,
        time: cookingTimeRef.current.value,
      },
    ]);
    navigate("/");
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form type="submit" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Recipe title:</span>
          <input type="text" ref={titleRef} />
        </label>

        <label>
          <span>Recipe Ingredients :</span>
          <input type="text" ref={ingredientsRef} />
          <button
            onClick={(e) => {
              e.preventDefault();

              setIngredients((prevIngredients) => [
                ...prevIngredients,
                ingredientsRef.current.value,
              ]);
              setTimeout(() => (ingredientsRef.current.value = ""), 300);
            }}
          >
            Add
          </button>
        </label>

        <p>
          Current ingredients:
          {ingredients.map((element, i) => (
            <span key={i}>
              {element}
              {"   "}
            </span>
          ))}
        </p>

        <label>
          <span> Recipe Method</span>
          <input type="text" ref={recipeMethodRef} />
        </label>

        <label>
          <span>Cooking time (minutes)</span>
          <input type="number" ref={cookingTimeRef} />
        </label>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default AddRecipe;
