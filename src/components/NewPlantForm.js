import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  
  const [formData, setFormData] = useState( {
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  
  function onNewPlantFormSubmit(event) {
    event.preventDefault()
    
    const newPlant = {
      ...formData
    }
    addPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onNewPlantFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
