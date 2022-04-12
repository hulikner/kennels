import React, { useState, useEffect } from 'react';

import './CustomerDetail.css';
import { useParams, useNavigate } from "react-router-dom"
import { getCustomerById } from '../../Modules/CustomerManager';

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "" });

  const {customerId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
      });
  }, [customerId]);

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer_address">{customer.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
    </section>
  );
}