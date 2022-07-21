import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdminProduct() {
    const {id}= useParams();
    const [product, setProduct] = useState([{}]);

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.warn(error);
          });
      }, []);

      return (
        <div>
            <h2>{product.name}</h2>
            <p className="text-xs">{product.description}</p>
            <p className="text-sm">{product.price}</p>
        </div>
      );
}