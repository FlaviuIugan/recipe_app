import styles from "./Home.module.css";
import RecipeList from "../components/RecipeList.js";
export default function Home({ recipes }) {
  return (
    <div className={styles.recipes}>
      {recipes.map((recipe, i) => (
        <div className={styles.list} key={i}>
          <RecipeList recipe={recipe} id={i} />
        </div>
      ))}
    </div>
  );
}
