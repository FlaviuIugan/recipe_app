import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ searchRef }) {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.link}>
          <h2>Recipe App</h2>
        </NavLink>
        <h5>Search: </h5>
        <input
          type="text"
          ref={searchRef}
          onChange={() => {
            // console.log(searchRef.current.value);
            navigate(`/search/${searchRef.current.value}`);
          }}
        />
        <NavLink to="/create" className={styles.link}>
          {" "}
          Create Recipe{" "}
        </NavLink>
      </nav>
    </div>
  );
}
