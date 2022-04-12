import React from "react"
import { Route, Routes, Navigate, Router, BrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard} from "./animal/AnimalCard"
import { AnimalList} from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerCard } from "./Customers/CustomerCard"
import { CustomerList } from "./Customers/CustomerList"
import { CustomerDetail } from "./Customers/CustomerDetail";
import { Login, setAuthUser} from "./auth/Login"
import { Register } from "./auth/Register"
import { LocationsCard } from "./Locations/LocationsCard"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { CustomerEditForm } from "./Customers/CustomerEditForm"
import { EmployeeEditForm } from "./Employees/EmployeeEditForm"
import { EmployeeCard } from "./Employees/EmployeeCard"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeDetail } from "./Employees/EmployeeDetail";



export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children :
            <Navigate to="/login" />
         
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    return (
        
        <BrowserRouter>
        <Routes>

        {/* Render the location list when http://localhost:3000/  */}
         <Route exact path="/" element={<Home />}/> 

        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} /> 
        <Route exact path="/locations" element={<LocationsCard />} /> 

        {/* Render the animal list when http://localhost:3000/animals  */}
         <Route exact path="/animals" element={
                <PrivateRoute>
                    <AnimalList />
                 </PrivateRoute>
            } /> 
         <Route exact path="/animals/:animalId" element={<AnimalDetail />} /> 
         <Route path="/animals/:animalId/edit" element={
          <PrivateRoute>
             <AnimalEditForm />
         </PrivateRoute>
        } /> 
         <Route exact path="/customers" element={
                <PrivateRoute>
                    <CustomerList />
                 </PrivateRoute>
            } /> 
         <Route exact path="/customers/:customerId" element={<CustomerDetail />} /> 
         <Route path="/customers/:customersId/edit" element={
          <PrivateRoute>
             <CustomerEditForm />
         </PrivateRoute>
        } /> 
         <Route exact path="/employees" element={
                <PrivateRoute>
                    <EmployeeList />
                 </PrivateRoute>
            } /> 
         <Route exact path="/employees/:employeeId" element={<EmployeeDetail />} /> 
         <Route path="/employees/:employeesId/edit" element={
          <PrivateRoute>
             <EmployeeEditForm />
         </PrivateRoute>
        } /> 
        </Routes>
        
        </BrowserRouter>

            
     
           
            
         
        
    )
}

