import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetail({ name, description, price, id }) {
  return (
    <div className="ml-4">
      <h2>{name}</h2>
      <p className="text-xs">{description}</p>
      <p className="text-sm">{price}</p>
      <button
        type="button"
        className="p-2 bg-teal-900 min-w-1/3 lg:w-1/3 rounded-lg font-semibold mt-2 hover:bg-teal-500 text-white"
      >
        <Link to={`/AdminProducts/${id}`}>consulter ce produit</Link>
      </button>
    </div>
  );
}
