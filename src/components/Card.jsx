import React from 'react'
import { sunny,rainy,cloudy,stormy } from '../assets'
import './Card.css'

const Card = ({data}) => {
    let imgsrc=sunny
    const weather = data.weather[0].main
    if(weather==='Storm'){
        imgsrc=stormy
    }else if(weather==='Clouds'){
        imgsrc=cloudy
    }else if(weather==='Rain'){
        imgsrc=rainy
    }
  return (<div class="card">
            <div class="container">
                <div class="icon">
                    <img src={imgsrc} height={100} width={100}/>
                </div>
                
                <div class="cloud back">
                    
                </div>
            </div>

            <div class="card-header">
                <span>{data.name}</span>
                <span>{data.weather[0].main}</span>
            </div>

            <div className="card-details">
                <span>Lat: {data.coord.lat}</span>
                <span>Lon: {data.coord.lon}</span>
            </div>

            {/* <span class="details">March 13</span> */}

            <span class="temp">{data.sys.country}</span>

            <div class="temp-scale">
                <span>Celsius</span>
            </div>
        </div>
    )
}

export default Card