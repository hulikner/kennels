import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, deleteEmployee, getEmployeeById } from '../../Modules/EmployeeManager';
import { useNavigate } from 'react-router-dom';
import styles from './EmployeeList.css'

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const getEmployees = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    getAllEmployees().then(setEmployees)
 
  };
  
  const handleDeleteEmployee = id => {
      deleteEmployee(id)
      .then(() => getAllEmployees().then(setEmployees));
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards" key={employees.length}>
      <button className='btn-add' onClick={()=>{navigate('/employees/create')}}>Add Employee</button>
     <div className='card-list'>
      {employees?.map(employee =>
      <div className='card-item'>

        <EmployeeCard
          key={employee.id}
          employee={employee}
          handleDeleteEmployee={handleDeleteEmployee} />
          </div>
          )}

     </div>
    </div>
  );
};
