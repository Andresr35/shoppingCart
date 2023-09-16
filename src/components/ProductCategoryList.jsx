import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "../assets/ProductCategoryList.module.css";
import ItemCard from "./ItemCard";

const ProductCategoryList = ({ cart, setCart }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/categories",
          {
            mode: "cors",
          }
        );
        const json = await res.json();
        return json;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    const fetchProducts = async () => {
      try {
        const arr = await fetchCategories();
        let newProducts;
        await arr.forEach(async (category) => {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${category}`,
            {
              mode: "cors",
            }
          );
          const arr = await res.json();
          if (newProducts === null) {
            newProducts = { [category]: arr };
          } else {
            newProducts = { ...newProducts, [category]: arr };
          }
          setProducts(newProducts);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.categories}>
      {products &&
        Object.keys(products).map((key) => (
          <div key={key}>
            <h4>{key}</h4>
            <div className={styles.category} key={key}>
              {products[key].map((product, index) => (
                <ItemCard
                  key={index}
                  product={product}
                  setCart={setCart}
                  cart={cart}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
ProductCategoryList.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ProductCategoryList;
