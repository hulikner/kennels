import React, { useState, useEffect } from "react";
import { AnimalById } from "../../Modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    AnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      { <img src={'./images/MyDog.jpg'} alt="My Dog" /> }
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};