import React, { useState } from "react";
import axios from "axios";

export default function AdminForm() {
  const [product, setProduct] = useState({});

  const update = (event) => {
    const changeDatas = { ...product };
    changeDatas[event.target.name] = event.target.value;
    setProduct({
      ...product,
      ...changeDatas,
    });
  };

  const createProduct = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/createproduct`, {
        name: product.name,
        description: product.description,
        price: product.price,
        category_id: product.category_id,
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-gray-300 flex flex-col justify-center text-center p-6">
      <h1 className="font-logo bg-orange py-1 text-2xl font-bold">
        Ajouter un produit
      </h1>
      <form>
        <div className="p-4">
          <div className="flex flex-col justify-center text-center space-y-2 p-2">
            <label
              htmlFor="product"
              className="flex flex-col justify-center text-base"
            >
              <span className="font-semibold">Nom du produit</span>
              <input
                type="text"
                id="name"
                value={product.name}
                name="name"
                onChange={update}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label
              htmlFor="description"
              className="flex flex-col justify-center"
            >
              <span className="font-semibold">Description</span>
              <input
                type="text"
                id="description"
                value={product.description}
                name="description"
                onChange={update}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label htmlFor="price" className="flex flex-col justify-center">
              <span className="font-semibold">Prix</span>
              <input
                type="text"
                id="price"
                value={product.price}
                name="price"
                onChange={update}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label
              htmlFor="category_id"
              className="flex flex-col justify-center"
            >
              <span className="font-semibold">Catégorie</span>
              <input
                type="text"
                id="category_id"
                value={product.category_id}
                name="category_id"
                onChange={update}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
          </div>
        </div>
        <button type="button" onClick={() => createProduct()}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}
