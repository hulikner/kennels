const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
  //be sure your employees have good data and related to a location and customer
  return fetch(`${remoteURL}/employees/${employeeId}`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}
export const updateEmployee = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}

export const deleteEmployee = id => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }