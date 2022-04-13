import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../Modules/CustomerManager';
import { getAllCustomers } from '../../Modules/CustomerManager';
import { addLocation, getAllLocation } from '../../Modules/LocationManager';
import './LocationForm.css'

export const LocationForm = () => {
	// State will contain both customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [location, setLocation] = useState({
		name: "",
		address: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section


	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newLocation = { ...location }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newLocation[event.target.id] = selectedVal
		// update state
		setLocation(newLocation)
	}

	const handleClickSaveLocation = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
		addLocation(location)
		
		navigate('/locations')
	
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location address" value={location.address} />
				</div>
			</fieldset>
            {location.name && location.address&&
			<button type="button" disabled={!location.name || !location.address} className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save
          </button>

            }
		</form>
	)
};