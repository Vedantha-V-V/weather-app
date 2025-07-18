import React from 'react'
import './Card.css'

const NoCard = () => {
  return (<div class="card">
            <div class="container">
                <div class="cloud front">

                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">

                </div>
            </div>

            <div class="temp-scale">
                <span>Celsius</span>
            </div>
        </div>
    )
}

export default NoCard