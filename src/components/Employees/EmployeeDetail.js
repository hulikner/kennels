import React, { useState, useEffect } from 'react';

import './EmployeeDetail.css';
import { useParams, useNavigate } from "react-router-dom"
import { getEmployeeById } from '../../Modules/EmployeeManager';

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", email: "" });

  const {employeeId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
      });
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee_email">{employee.email}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.employee?.name}</div> */}
    </section>
  );
}