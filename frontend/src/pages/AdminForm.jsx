import React, { useState } from "react";
import axios from "axios";

export default function AdminForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
  });
  const [msg, setMsg] = useState("");

  const createProduct = () => {
    if (
      product.name !== "" &&
      product.description !== "" &&
      product.price !== "" &&
      product.category_id !== ""
    ) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/product`, product)
        .catch((err) => console.error(err));
    } else {
      setMsg("Veuillez remplir tous les champs");
    }
  };

  return (
    <div>
      <h1 className="text-center">Ajouter un produit</h1>
      <form>
        <div>
          <div>
            <h3>Ajout du nom du produit</h3>
            <label>
              nom du produit
              <input
                type="text"
                id="product_name"
                value={product.name}
                name="product_name"
                onChange={(event) => setProduct(event)}
              />
            </label>
            <label>
              description du produit
              <input
                type="text"
                id="product_description"
                value={product.description}
                name="product_description"
                onChange={(event) => setProduct(event)}
              />
            </label>
            <label>
              Prix
              <input
                type="text"
                id="price"
                value={product.price}
                name="price"
                onChange={(event) => setProduct(event)}
              />
            </label>
            <label>
              catégorie (1 pour boisson, 2 pour patisserie)
              <input
                type="text"
                id="category"
                value={product.category_id}
                name="product_description"
                onChange={(event) => setProduct(event)}
              />
            </label>
          </div>
          <p>{msg}</p>
        </div>
        <button
          type="button"
          onClick={createProduct}
          className="btn btn-success"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
