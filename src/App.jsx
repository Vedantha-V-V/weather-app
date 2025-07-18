import { useState } from 'react'
import { useForm } from "react-hook-form"
import Card from './components/Card'
import './App.css'



function App() {
  const [cityData, setCityData] = useState()
  const {register, handleSubmit, formState: { errors }} = useForm()

  const findCity = async(data) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${import.meta.env.VITE_API_KEY}`).then((data)=>{
      return data.json()
    })
    setCityData(response)
    console.log(response.name)
    
  }

  return ( <>
    <h1>Weatherly</h1>
    <div className="main">
    <div>
      {cityData?<Card data={cityData}/>:null}
    </div>
    <div className="form">
      <h2>Enter the City</h2>
      <form onSubmit={handleSubmit(findCity)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <label id="city" className="formlabel">City</label> */}
          <input className="input-wrapper" {...register("city", { required: true })} placeholder="City?"/>
          {errors.city && <span>Please enter a City</span>}
          <button className="btn" type="submit">Enter</button>
      </form>
    </div>
  </div>
  </>
  )
}

export default App
