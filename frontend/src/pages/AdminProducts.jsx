import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDetail from "@components/ProductDetail";

export default function AdminProducts() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Voici la liste des produits à la carte</h1>
      <div className="flex flex-row">
        <div>
          {Products &&
            Products.map((product) => {
              return (
                <ProductDetail
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  id={product.id}
                  key={product.id}
                />
              );
            })}
        </div>
      </div>
      <button
        type="button"
        className="p-2 bg-teal-900 min-w-1/3 lg:w-1/3 rounded-lg font-semibold mt-2 hover:bg-teal-500 text-white"
      >
        <Link to="/AdminForm">Ajouter un produit</Link>
      </button>
    </div>
  );
}
