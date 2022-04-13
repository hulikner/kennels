const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}`)
  .then(res => res.json())
}

export const getAllLocation = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}
export const updateLocation = (editedLocation) => {
  return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(editedLocation)
  }).then(result => result.json())
}

export const deleteLocation = id => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addLocation = (newLocation) =>{
    return fetch(`${remoteURL}/locations`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newLocation)
    }).then(result => result.json())
  }