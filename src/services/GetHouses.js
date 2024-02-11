import React from "react"
import { useState, useEffect } from "react"

export default function GetHouses() {

    const [houses, setHouses] = useState([])
    const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json'
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
            .then(data => { 
                console.log(data)
                setHouses(data)
            })
                .catch(error => {
                    console.log(error)
                })
    } ,[])
    return houses
}