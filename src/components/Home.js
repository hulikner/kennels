import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../Modules/AnimalManager"
import { PropsAndState } from "./PropsAndState";
import './Home.css';
export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <section className="container">
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <div className="spotlight-container">

      <h1>Animal Spotlight</h1>
      <button className="btn-reload" onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
      </div>
    </section>
  );
};