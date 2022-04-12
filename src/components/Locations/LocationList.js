import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './LocationCard';
import { getAllLocation, deleteLocation, getLocationById } from '../../Modules/LocationManager';


export const LocationList = () => {
  // The initial state is an empty array
  const [location, setLocation] = useState([]);
  const getLocation = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    getAllLocation().then(setLocation)

    
  };
  
  
  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocation().then(setLocation));
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocation();
  }, []);
  
  console.log(location)
  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div 
    className="container-cards" key={location.length}>
      {location?.map(location =>
        <LocationCard
          key={location.id}
          location={location}
          handleDeleteLocation={handleDeleteLocation} />)}
    </div>
  );
};
