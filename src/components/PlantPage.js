import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants,setPlants] = useState([])
  const[searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsData => setPlants(plantsData))
  },[])
  // console.log(plants)
  
  function addPlant(newPlant) {
    // console.log(newPet)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlantsData => setPlants([...plants, newPlant]))
  }

  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
