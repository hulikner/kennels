import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./Customers/CustomersCard"
import { EmployeesCard } from "./Employees/EmployeesCard"
import { LocationsCard } from "./Locations/LocationsCard"
import { PropsAndState } from "./PropsAndState"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
    <NavBar/>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Derick" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeesCard />            
            <EmployeesCard />            
            <EmployeesCard />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationsCard />
            <LocationsCard />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </article>
    </>
)