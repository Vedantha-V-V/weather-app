import React from 'react'
import './Card.css'

const Card = ({data}) => {
    console.log(data)
  return (<div class="card">
            <div class="container">
                <div class="cloud front">
                    <span class="left-front"></span>
                    <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                    <span class="left-back"></span>
                    <span class="right-back"></span>
                </div>
            </div>

            <div class="card-header">
                <span>{data.name}</span>
                <span>March 13</span>
            </div>

            <span class="temp">{data.sys.country}</span>

            <div class="temp-scale">
                <span>Celcius</span>
            </div>
        </div>
    )
}

export default Card