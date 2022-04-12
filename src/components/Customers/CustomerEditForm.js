import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateCustomer, getCustomerById } from "../../Modules/CustomerManager"
import "./CustomerEditForm.css"


export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {customerId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
	    locationId: 1,
	    customerId: 1
    };

  //pass the editedAnimal object to the database
  updateCustomer(editedCustomer)
    .then(() => navigate("/customers")
    )
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="customer"
              value={customer.id}
            />
            <label htmlFor="customer">Address</label>
          </div>
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

