import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal, getAnimalById } from '../../Modules/AnimalManager';
import './AnimalList.css'

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    getAllAnimals().then(setAnimals)
 
  };
  
  const handleDeleteAnimal = id => {
      deleteAnimal(id)
      .then(() => getAllAnimals().then(setAnimals));
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  
  const navigate = useNavigate();
  return (

  

  <section className="section-content">
 
 
 

    <div className="container-cards" key={animals.length}>
    <button type="button"
        className="btn-add"
        onClick={() => {navigate("/animals/create")}}>
        Admit Animal
    </button>
    <div className='card-list'>
      {animals?.map(animal =>
      <div className='card-item'>
        <AnimalCard
        key={animal.id}
        animal={animal}
        handleDeleteAnimal={handleDeleteAnimal} />
        </div>
        )}

    </div>
    </div>

        </section>
  );
};
