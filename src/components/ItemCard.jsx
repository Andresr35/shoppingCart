import PropTypes from "prop-types";
import styles from "../assets/ItemCard.module.css";
import Star from "./Star";
import { useState } from "react";

const ItemCard = ({ product, cart, setCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (e) => {
    e.preventDefault();
    e.target.innerText = "Added!";
    const newCart = [...cart];
    newCart.push({ productTitle: product.title, quantity: quantity });

    setCart(newCart);
  };

  return (
    <div className={styles.itemCard}>
      <h4>{product.title}</h4>
      <hr />
      <img src={product.image} alt="productImage" />
      <hr />
      <p>${product.price}</p>
      <h5>Description</h5>
      <p className={styles.description}>{product.description}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit" onClick={(e) => addToCart(e)}>
        Add To Cart
      </button>
      <p className={styles.rating}>
        {product.rating.rate}
        <Star /> with {product.rating.count} ratings!
      </p>
    </div>
  );
};

ItemCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ItemCard;
