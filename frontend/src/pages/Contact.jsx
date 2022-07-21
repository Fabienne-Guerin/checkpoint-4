import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import map from "@assets/map.png";
=======
>>>>>>> 276bb4f869d97f4126c36e4952e29ee6ae008c1f

export default function Contact() {
  return (
    <div>
<<<<<<< HEAD
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="flex flex-row">
        <img className="w-48 h-auto m-6" src={map} alt="map" />
        <div className="m-6 ">
          <h3 className="text-xl text-center pb-4">Informations utiles</h3>
          <div className="text-sm">
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
        <Link to="/Form">
          <div className="bg-teal-900 text-white text-center font-bold py-4 px-4 mb-6 rounded-full hover:bg-teal-500 mt-4 w-2/3">
            <button type="button">Nous envoyer un message</button>
          </div>
        </Link>
      </div>
=======
      <p>This is a contact page</p>
>>>>>>> 276bb4f869d97f4126c36e4952e29ee6ae008c1f
    </div>
  );
}
