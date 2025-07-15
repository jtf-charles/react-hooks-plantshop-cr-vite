import React from "react";
import { useEffect , useState } from "react";
function PlantCard({name, price, imgURL}) {
  const [isclicked,setIsClicked]=useState(true)

  function handleClick(){
    setIsClicked(!isclicked)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={imgURL} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isclicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
