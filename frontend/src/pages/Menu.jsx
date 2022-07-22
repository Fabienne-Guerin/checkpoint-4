import React, { useState, useEffect } from "react";
import Product from "@components/Product";
import coldbrew from "@assets/coldbrew.jpg";
import pastries from "@assets/pastries.jpg";
import sheers from "@assets/sheers.jpg";
import axios from "axios";

export default function Menu() {
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
      <h1>Voici notre menu</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center">
          <img className="w-48 h-auto m-6" src={coldbrew} alt="iced coffee" />
        </div>
        <div className="m-6 ">
          <h3>Nos boissons</h3>
          <div>
            {Products &&
              Products.filter((product) => product.category_id === 1).map(
                (product) => {
                  return (
                    <Product
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
      <div className="flex flex-col-reverse md:flex-row">
        <div className="m-6 ">
          <h3>Nos patisseries</h3>
          <div>
            {Products &&
              Products.filter((product) => product.category_id === 2).map(
                (product) => {
                  return (
                    <Product
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
        <div className="flex justify-center">
          <img className="w-48 h-auto m-6" src={pastries} alt="pastries" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center">
          <img
            className="w-48 h-auto m-6"
            src={sheers}
            alt="sharing a coffee"
          />
        </div>
        <div className="m-6 ">
          <h3>Pourquoi ne pas craquer pour notre formule?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            in quis totam doloremque!
          </p>
        </div>
      </div>
    </div>
  );
}
