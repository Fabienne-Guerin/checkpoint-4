import React from "react";
import { Link } from "react-router-dom";
import map from "@assets/map2.png";

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="flex flex-col-reverse  justify-center md:flex-row">
        <div className="flex justify-center">
          <img className="w-48 h-auto m-6" src={map} alt="map" />
        </div>
        <div className="m-6 flex flex-col">
          <h3 className="text-xl text-center pb-4">Informations utiles</h3>
          <div className="flex flex-col text-center text-sm">
            <p>12 boulevard des chats, </p>
            <p>69002 Lyon, France</p>
            <p>04 44 04 44 04</p>
            <p>du mardi au samedi de 10h à 19h</p>
            <p>contact@sweets and Coffee</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-center ">
          Une question? Une remarque? N'hésitez pas à nous contacter!
        </h3>
        <Link to="/ContactForm">
          <div className="bg-teal-900 text-white text-center font-bold py-4 px-4 mb-6 rounded-full hover:bg-teal-500 mt-4 w-2/3 mx-auto">
            <button type="button">Nous envoyer un message</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
