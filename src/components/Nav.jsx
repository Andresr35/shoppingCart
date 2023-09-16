import { NavLink } from "react-router-dom";
import styles from "../assets/Nav.module.css";
import Cart from "./Cart";
import PropTypes from "prop-types";

const Nav = ({ cart }) => {
  let sum = 0;

  if (cart.length === 0) {
    sum = 0;
  } else {
    console.log(cart);
    cart.forEach((element) => {
      sum += Number(element.quantity);
    });
  }
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
        <li>
          <div>{sum}</div>

          <Cart />
        </li>
      </ul>
    </nav>
  );
};
Nav.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Nav;
