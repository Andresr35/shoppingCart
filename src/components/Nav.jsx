import { NavLink } from "react-router-dom";
import styles from "../assets/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <h1>Shopping!</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shopping"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            Shopping
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
