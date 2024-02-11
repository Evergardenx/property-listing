import React from "react"
import GetHouses from "../../services/GetHouses"
import HouseCard from "../HouseCard/HouseCard"
import './HouseListing.css'

export default function HouseListing({data = { "locations": [], "superhost": false,'bedrooms': 'all'}}){

    const housesReturned = GetHouses()
   
    let houses = []

    if(data != "") {
        if(data.locations.length != 0 ){
            houses = []
            data.locations.map(filter => {
                console.log(filter)
                housesReturned.filter( house => house.location == filter ).map(house => houses.push(house))  
                }) 
        } else {
            houses = housesReturned
        }

        if(data.bedrooms != 'all'){
            houses = houses.filter( house => house.capacity.bedroom == data.bedrooms )
        } 
        if(data.superhost != false) {
            houses = houses.filter( house => house.superhost == true )
         }    
    }

    return (
        <section className="main-house-listing">
            <div className="house-listing">
            <h1 className="title-house-listing">Over 200 stays</h1>
            <div className="list-houses">
            {
                houses ? ( 
                    houses.map(house => <HouseCard key={house.id }house={house}/>
                )) : (
                    <p>Loading...</p>
                  )
            }
            </div>
        </div>
        </section>
    )
}