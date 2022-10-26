import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";

export default function Recipe({ recipes }) {
  const { title } = useParams();
  const state = recipes.filter((element) => element.title === title);

  return (
    state && (
      <div className={styles.recipe}>
        <h2 className={styles.pagetitle}>{state[0].title}</h2>
        <p>Takes {state[0].time} minute to cook.</p>
        <br />
        <ul>
          {state[0].ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <p className={styles.method}>{state[0].method}</p>
      </div>
    )
  );
}
