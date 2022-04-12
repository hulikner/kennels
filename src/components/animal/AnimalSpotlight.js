import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../Modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      {/* { <img src={require('public/Images/teddybear-dog-breeds.png')} alt="My Dog" /> } */}
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};