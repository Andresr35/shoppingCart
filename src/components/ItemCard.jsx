import PropTypes from "prop-types";
import styles from "../assets/ItemCard.module.css";
import Star from "./Star";

const ItemCard = ({ product }) => {
  return (
    <div className={styles.itemCard}>
      <h4>{product.title}</h4>
      <img src={product.image} alt="productImage" />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>
        {product.rating.rate} <Star /> with {product.rating.count} ratings!
      </p>
    </div>
  );
};

ItemCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ItemCard;
