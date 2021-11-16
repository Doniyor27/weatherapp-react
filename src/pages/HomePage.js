import { useState, useEffect} from 'react'
import axios from 'axios';

import CitySwitcher from '../containers/CitySwitcher/CitySwitcher';

import './HomePage.scss';

const HomePage = () => {

  const [activeCity, setActiveCity] = useState('tashkent');
  const [activeWeather, setActiveWeather] = useState({
    isFetched: false,
    data: {},
    error: null,
  })

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      q: activeCity,
      appid: '83d575dd622ce9a6e3f441d9ad917938',
      units: 'metric'
    }
    })
    .then(function (response) {
      setActiveWeather({
        isFetched: true,
        data: response.data,
        error: false,
      })
    })
    .catch(function (error) {
      setActiveWeather({
        isFetched: true,
        data: {},
        error: error,
      })
    })
    .then(function () {
      // always executed
    });  
    }, [activeCity])

  return (
    <div>
      <CitySwitcher setActiveCity={setActiveCity} activeCity={activeCity}/>
        <div>
          {
            activeWeather.isFetched ? (
              <div className="main-weather">
                <h1 className="city-name">{activeWeather.data.name}</h1>
                <h1>{Math.round(activeWeather.data.main.temp)}°C</h1>
                <div>
                  {
                  activeWeather.data.weather.map((weather) => (
                    <h1>it's now {weather.main} in {activeWeather.data.name}</h1>
                  ))
                 }
                </div>
              </div>
            ) : (
              <h1>loading...</h1>
            )
          }
        </div>
    </div>
  )
} 

export default HomePage;