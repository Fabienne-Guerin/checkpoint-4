import React from "react";
import counter from "@assets/counter.jpg";
import outside from "@assets/outside.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-items-center">
        <h1 className="text-center text-3xl">
          {" "}
          Bienvenue chez Sweets and Coffee
        </h1>
        <img
          className="w-auto h-auto m-6"
          src={counter}
          alt="notre joli comptoir"
        />
        <p className="m-6">
          Chez Sweets and Coffee, on aime boissons et de patisseries de qualité.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          laudantium quidem molestias iste odio eum velit excepturi fuga ipsum
          minus modi similique dolores a, corrupti nihil, odit minima dolorum.
          Incidunt.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full md:flex-row md:justify-start">
        <div className="flex justify-center">
          <img
            className=" flex w-48 h-auto m-6"
            src={outside}
            alt="notre magnifique terrasse"
          />
        </div>
        <div>
          <p className="m-6">
            Aux beaux jours, venez profiter de notre terrasse. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Commodi laudantium
            quidem molestias iste odio eum velit excepturi fuga ipsum minus modi
            similique dolores a, corrupti nihil, odit minima dolorum. Incidunt.
          </p>
        </div>
      </div>
    </div>
  );
}
