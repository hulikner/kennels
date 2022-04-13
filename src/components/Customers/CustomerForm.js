import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../Modules/CustomerManager';
import { getAllCustomers } from '../../Modules/CustomerManager';
import { getAllLocation } from '../../Modules/LocationManager';
import './CustomerForm.css'

export const CustomerForm = () => {
	// State will contain both customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [customer, setCustomer] = useState({
		name: "",
		address: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCustomer = { ...customer }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}

    useEffect(() => {
        getAllLocation().then(setLocations)
        getAllCustomers().then(setCustomers)
	}, []);

console.log(customer)
	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		

	
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer breed" value={customer.breed} />
				</div>
			</fieldset>
            {customer.name && customer.address&&
			<button type="button" disabled={!customer.name || !customer.address} className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save
          </button>

            }
		</form>
	)
};