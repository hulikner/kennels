import React from 'react';
import "./Location.css";
import { Link } from "react-router-dom";


export const LocationCard = ({ location, handleDeleteLocation }) => {
  console.log(location)
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={'/Images/MyDog.jpg'} alt="My Dog" /> */}
        </picture>
        <h3>Name:<span className="card-name">
          {location.name}
        </span></h3>
        <p>Address: {location.address}</p>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
        <Link to={`/location/${location.id}`}>
        <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
