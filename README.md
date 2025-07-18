# WeatherNow

WeatherNow – Simple Weather App
WeatherNow is a lightweight frontend application that fetches and displays real-time weather data for any location using a public weather API. Built for quick access and clean UX, it's perfect for learning and showcasing frontend API integration.

# Features
- Search weather by city name

- Real-time temperature, humidity, wind speed, and conditions

- Clean, responsive UI

- Fast API calls with error handling

# Tech Stack
- ReactJS

- JavaScript (ES6+)

- Weather API (OpenWeatherMap)

# Getting Started
1. Clone the repository
``` bash

    git clone https://github.com/Vedantha-V-V/weather-app.git
    cd weather-app

```
2. Install dependencies (if using a framework like React)

```bash

npm install

```
3. Add your API key
Create a .env file in the root and add your API key:

```bash

env
VITE_WEATHER_API_KEY=your_api_key_here

```

4. Run the project
```bash

npm run dev  # for Vite

```

# API Reference
Using: OpenWeatherMap API
Endpoint example:
```bash

https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key

```