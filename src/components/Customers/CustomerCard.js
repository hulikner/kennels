import React from 'react';
import "./Customer.css";
import { Link } from "react-router-dom";


export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'/Images/MyDog.jpg'} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-name">
          {customer.name}
        </span></h3>
        <p>Address: {customer.address}</p>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
        <Link to={`/customer/${customer.id}`}>
        <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
