const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}?_expand=employees`)
  .then(res => res.json())
}

export const getAllLocation = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}
export const updateLocation = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = id => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }