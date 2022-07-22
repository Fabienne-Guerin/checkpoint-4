import React from "react";

function Product({ name, description, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p className="text-xs">{description}</p>
      <p className="text-end text-sm">{price}€</p>
    </div>
  );
}
export default Product;
