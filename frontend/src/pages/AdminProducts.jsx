import React, { useState, useEffect } from "react";
import axios from "axios";
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
            Products.map(
                (product) => {
                  return (
                    <ProductDetail
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      id={product.id}
                      key={product.id}
                    />
                  );
                }
              )}
        </div>
      </div>
    </div>
    );
}