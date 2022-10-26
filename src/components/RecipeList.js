import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeList.module.css";

export default function RecipeList({
  recipe: { title, ingredients, method, time },
  id,
}) {
  return (
    <div className={styles.card}>
      <h5 style={{ padding: "10px" }}>{title}</h5>
      <p style={{ padding: "10px" }}>{time} minutes to make</p>
      <p style={{ padding: "10px", marginBottom: "20px" }}>{method}</p>
      <Link to={`/recipes/${title}`}>Cook This</Link>
    </div>
  );
}
