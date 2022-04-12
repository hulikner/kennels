import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationsCard } from "./Locations/LocationsCard"
import { EmployeesCard } from "./Employees/EmployeesCard"
import { CustomersCard } from "./Customers/CustomersCard"

export const ApplicationViews = () => {
        <>
            <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />}/>
            <Route path="/Cusdtomer" element={<Home />}/>
        
            

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animal">
              <AnimalCard />
            </Route>
            </Routes>
        </>
    
}