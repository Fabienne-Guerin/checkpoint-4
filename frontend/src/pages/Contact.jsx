import React from "react";
import map from "@assets/map.png";

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="flex flex-row">
        <img className="w-48 h-auto m-6" src={map} alt="map" />
        <div className="m-6 ">
          <h3 className="text-xl text-center pb-4">Informations utiles</h3>
          <div>
            <p>12 boulevard de l'arabica, </p>
            <p>69002 Lyon, France</p>
          </div>
          <div>
            <p>04 44 04 44 04</p>
            <p>du mardi au samedi de 10h à 19h</p>
          </div>
          <div>
            <p>contact@sweets and Coffee</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <h3>Une question? Une remarque? N'hésitez pas à nous contacter!</h3>
        {/* <button className="p-2 bg-teal-900 min-w-1/3 lg:w-1/3 rounded-lg font-semibold mt-4 hover:bg-teal-500 text-white">
          nous contacter
        </button> */}
      </div>
    </div>
  );
}
