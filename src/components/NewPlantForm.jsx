import React from "react";
import { useEffect , useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({onAddPlant}) {
  const [newName,setNewName]=useState("")
  const [newImage,setNewImage]=useState("")
  const [newPrice,setNewPrice]=useState("")

 function handleName(e){
  setNewName(e.target.value);
 }

 function handleImage(e){
  setNewImage(e.target.value);
 }

 function handlePrice(e){
  setNewPrice(e.target.value);
 }

async function handleSubmit(e) {
  e.preventDefault();

  const newPlantData = {
    name: newName,
    image: newImage,
    price: newPrice
  };

  const res = await fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlantData),
  });

  const savedPlant = await res.json();   
  onAddPlant(savedPlant);               

  setNewName("");
  setNewImage("");
  setNewPrice("");
}




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newName} onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice} onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
