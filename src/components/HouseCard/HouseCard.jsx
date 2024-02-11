import React from "react"
import './HouseCard.css'
import home from '../../../public/images/Home_duotone.svg'
import user from '../../../public/images/User_alt_duotone.svg'
import star from '../../../public/images/Starfill.svg'

export default function HouseCard(props) {
    const {house} =  props
    return (
        <div key={house.id} className="house-card">
            <div className="image-container">
                {
                    house.superhost && (
                        <div className="div-superhost">
                            <span className="name-superhost">Superhost</span>
                            <img className="img-superhost" src={star}></img>
                        </div>
                    )       
                }
                <img className="img-house-card" src={house.image}></img>
            </div>
            <div className="info-house-card">
                <span className="title-house-card">{house.title}</span>
                <p className="description-house-card">{house.description}</p>
                <div className="bedroom-guest-house-card">
                    <div className="bedroom-house-card">
                        <img src={home}></img>
                        <span className="capacity-house-card">{house.capacity.bedroom} bedroom</span>
                    </div>
                    <div className="guest-house-card">
                        <img src={user}></img>
                        <span className="guest-house-card">{house.capacity.people} guest</span>             
                    </div>
                </div>
                <div className="price-stars-house-card">
                    <div className="price-house-card">
                        <span>${house.price}</span>
                        <span className="night-house-card">/night</span>             

                    </div>
                    <div className="stars-house-card">
                        <img src={star}></img>
                        <span className="rating-house-card">{house.rating}</span>             
                    </div>
                </div>
            </div>
        </div>
    )
}