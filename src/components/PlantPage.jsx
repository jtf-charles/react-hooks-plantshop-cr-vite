import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const searchPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function addNewPlant(savedPlant) {
    //console.log("Updated plants:", [...plants, savedPlant]);
    setPlants([...plants, savedPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant} />
      <Search Search={searchText} onSearchChange={handleSearch} />
      <PlantList plantsList={searchPlants} />
    </main>
  );
}

export default PlantPage;
