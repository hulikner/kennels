import React from 'react';
import "./Employee.css";
import { Link } from "react-router-dom";


export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'/Images/MyDog.jpg'} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-name">
          {employee.name}
        </span></h3>
        <p>Email: {employee.email}</p>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
        <Link to={`/employee/${employee.id}`}>
        <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
