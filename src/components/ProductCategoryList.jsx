import { useEffect, useState } from "react";
import styles from "../assets/ProductCategoryList.module.css";

const ProductCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .then(() => {
        categories.forEach((category) => {
          fetch(`https://fakestoreapi.com/products/category/jewelery}`)
            .then((res) => res.json())
            .then((json) => {
              const newProducts = { ...products, [category]: json };
              setProducts(newProducts);
            });
        });
      })
      .catch((error) => console.error("error fetching", error));
  }, []);

  return (
    <div className={styles.products}>
      stuff goes under here
      {Object.keys(products).map((category, index) => (
        <div key={index} className={styles.category}>
          <div>{category}</div>

          {products[category].map((product, index) => (
            <div key={index}>{product.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductCategoryList;
