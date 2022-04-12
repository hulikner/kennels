import React, { useState, useEffect } from 'react';

import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"
import { getLocationById } from '../../Modules/LocationManager';

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
      });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location_address">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.location?.name}</div> */}
    </section>
  );
}