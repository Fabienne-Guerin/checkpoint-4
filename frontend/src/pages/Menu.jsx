import React from "react";
import coldbrew from "@assets/coldbrew.jpg"

export default function Menu() {
  return (
    <div>
      <h1>Voici notre menu</h1>
      <div className="flex flex-row">
        <img className="w-96 h-auto mt-6 " src={coldbrew} alt="iced coffee"/>
        <div>
          <h3>Nos boissons</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in quis totam doloremque!</p>
        </div>
        
      </div>

    </div>
  );
}

