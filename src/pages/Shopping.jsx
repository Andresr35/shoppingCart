import { useState } from "react";
import Nav from "../components/Nav";
import ProductCategoryList from "../components/ProductCategoryList";

const Shopping = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Nav cart={cart} />
      <main>
        <ProductCategoryList cart={cart} setCart={setCart} />
      </main>
    </>
  );
};

export default Shopping;
