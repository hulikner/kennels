import {React, useState, useEffect} from "react"
// import "./LocationsCard.css"

export const MadLib = () => {
    const [madLibrary, setMadLibrary] = useState({});

    useEffect(() => {
        setMadLibrary(
            {
                pluralNoun1: "unicorns",
                adjective1: "pretty",
                noun: "street",
                typeOfFood: "mexican",
                articleOfClothing: "dickey",
                verbEndingIning: "wallowing",
                pluralNoun2: "trees",
                pluralNoun3: "lasers",
                numberVal: "113",
                celebrity: "Taylor Swift",
                color: "golden rod",
                verbEndingIning2: "licking",
                typeOfFood: "Italian sweets",
                pluralNoun: "concrete shoes",
                adjective2: "gloomy",
                adjective3: "claustrophobic"
            }
        );
    }, []);
    return (<section className ="location">
        <h3 className="location_name">MadLib</h3>
        <div className = "location_address">MadLib</div>
        </section>)
}