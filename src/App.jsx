import { useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const dateBuilder = (d) =>{
    const months = ["January","February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = d.getDate()
    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`

  }

  const findCity = event => {
    if(event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
      .then((data)=>{return data.json()})
      .then(result =>{setWeather(result)
        setQuery('')})
    }
  }

  return (
    <div className={(typeof weather.main != 'undefined')?((weather.main.temp > 16)?'body-warm':'body'):'body'}>
      <div className={(typeof weather.main != 'undefined')?((weather.main.temp > 16)?'app-warm':'app'):'app'}>
        <main>
          <div className="search-box">
            <input className="search-bar" placeholder="Search..." 
            onChange={e=>setQuery(e.target.value)} value={query}
            onKeyDown={findCity}/>
          </div>
          {(typeof weather.main != "undefined")?(
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
      ):('')} 
      </main>
      </div>
    </div>
  )
}

export default App
