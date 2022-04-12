import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateLocation, getLocationById } from "../../Modules/LocationManager"
import "./LocationEditForm.css"


export const LocationEditForm = () => {
  const [location, setLocation] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {locationId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and locationId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedLocation = {
      id: locationId,
      name: location.name,
      email: location.email,
	    locationId: 1,
	    locationId: 1
    };

  //pass the editedAnimal object to the database
  updateLocation(editedLocation)
    .then(() => navigate("/locations")
    )
  }

  useEffect(() => {
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
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
              value={location.name}
            />
            <label htmlFor="name">location name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={location.id}
            />
            <label htmlFor="location">Address</label>
          </div>
          {/* Be sure to include location and location */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

