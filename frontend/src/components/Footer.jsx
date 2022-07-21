import { Link } from "react-router-dom";

import logo from "../assets/logo_SC.png";
import fb from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <div className="flex flex-row bg-white text-cyan-900">
      <div className="flex-1">
        <img src={logo} alt="logo" width="180px" height="auto" />
        <nav className="flex flex-row">
          <p className="mr-4">
            <Link to="/">Accueil</Link>
          </p>
          <p className="mr-4">
            <Link to="Menu">Menu</Link>
          </p>
          <p className="mr-4">
            <Link to="Contact">Contact</Link>
          </p>
        </nav>
        <p>Created by Sweets and Coffee © 2022</p>
      </div>
      <div className="flex-1">
        <div>
          <p>12 boulevard de l'arabica, </p>
          <p>69004 Lyon, France</p>
        </div>
        <div>
          <p>07 77 07 77 07</p>
          <p>du lundi au vendredi de 10h à 19h</p>
        </div>
        <div>
          <p>contact@sweets and Coffee</p>
        </div>
        <img
          className="w-9 h-9 circle bg-teal-900"
          src={fb}
          alt="facebook logo"
        />
        <img
          className="w-9 h-9 circle bg-teal-900"
          src={instagram}
          alt="instagram logo"
        />
      </div>
    </div>
  );
}
