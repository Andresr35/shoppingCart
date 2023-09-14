import { useEffect, useState } from "react";

const ItemCard = () => {
  const [product, setProduct] = useState({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [product]);

  return (
    <div>
      <h4>{product.title}</h4>
      <img src={product.image} alt="productImage" />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>
        {product.rating.rate} with {product.rating.count} ratings!
      </p>
    </div>
  );
};

export default ItemCard;
