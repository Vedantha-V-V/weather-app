import React from 'react'
import { sunny,rainy,cloudy,stormy, thermometer, humidity,sealevel } from '../assets'
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
                <span>{data.weather[0].description}</span>
            </div>

            <div className="card-details">
                <span style={{color:"rgba(87, 77, 51, 1)"}}>Lat: {data.coord.lat}</span>
                <span style={{color:"rgba(87, 77, 51, 1)"}}>Lon: {data.coord.lon}</span>
            </div>

            <div className="card-details">
                <span className="temperature"><img src={sealevel} width={25} height={25}/><p style={{color:"lightblue"}}>&nbsp;{data.main.sea_level}</p></span>
                <span className="temperature"><img src={thermometer} width={25} height={25}/><p style={{color:"greenyellow"}}>&nbsp;{data.main.temp}</p></span>
                <span className="temperature"><img src={humidity} width={20} height={20}/><p style={{color:"#4c9beb"}}>&nbsp;{data.main.humidity}</p></span>
            </div>

            <span class="temp">{data.sys.country}</span>

            <div class="temp-scale">
                <span>Celsius</span>
            </div>
        </div>
    )
}

export default Card