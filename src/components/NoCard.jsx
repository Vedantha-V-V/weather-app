import React from 'react'
import './Card.css'

const NoCard = () => {
  return (<div className="card">
            <div className="container">
                <div className="cloud front">

                </div>
                <span className="sun sunshine"></span>
                <span className="sun"></span>
                <div className="cloud back">

                </div>
            </div>

            <div className="temp-scale">
                <span>Celsius</span>
            </div>
        </div>
    )
}

export default NoCard