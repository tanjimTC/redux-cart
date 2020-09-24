import React from "react";

const Products = (props) => {
  const { addToCart, products } = props;
  return (
    <div>
      <p>{products.name}</p>
      <button onClick={() => addToCart(products)}>Add to cart</button>
    </div>
  );
};

export default Products;
