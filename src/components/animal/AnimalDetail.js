import React, { useState, useEffect } from "react";
import { getAnimalById, deleteAnimal } from "../../Modules/AnimalManager";
import { useParams, useNavigate } from "react-router-dom"
import "./AnimalDetail.css";

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({name: '', breed: '', customers:{name: ''}, locations:{name:''}});
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      navigate("/animals")
    );
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    getAnimalById(animalId)
      .then(animal=>{
        setAnimal(animal)
      })
     
  }, [animalId]);
  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      <div className="animal__location">Location: {animal.locations.name}</div>
      <div className="animal__owner">Customer: {animal.customers.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
};