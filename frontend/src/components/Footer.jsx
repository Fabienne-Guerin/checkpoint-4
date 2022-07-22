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
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex flex-row">
          <img className="w-9 h-9 mt-6" src={fb} alt="facebook" />
          <img className="w-16 h-16" src={instagram} alt="instagram" />
        </div>
        <p>Created by Sweets and Coffee © 2022</p>
      </div>
    </div>
  );
}
