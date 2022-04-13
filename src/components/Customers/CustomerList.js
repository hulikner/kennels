import React, { useState, useEffect } from 'react';
//import the components we will need
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, deleteCustomer, getCustomerById } from '../../Modules/CustomerManager';
import { Navigate, useNavigate } from 'react-router-dom';
import './CustomerList.css'

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const getCustomers = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    getAllCustomers().then(setCustomers)
 
  };
  
  const handleDeleteCustomer = id => {
      deleteCustomer(id)
      .then(() => getAllCustomers().then(setCustomers));
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (

  

    <div className="container-cards" key={customers.length}>
    <button type="button"
          className="btn-add"
          onClick={() => {navigate("/customers/create")}}>
          New Customer
      </button>
      <div className='card-list'>
      {customers?.map(customer =>
      <div className='card-item'>

        <CustomerCard
          key={customer.id}
          customer={customer}
          handleDeleteCustomer={handleDeleteCustomer} />
      </div>
          
          )}


      </div>
    </div>
  
  );
};
