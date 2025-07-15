import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantsList.map((plant) => {
        return <PlantCard key={plant.id} name={plant.name} price={plant.price} imgURL={plant.image}/>
      })}
      </ul>
  );
}

export default PlantList;
