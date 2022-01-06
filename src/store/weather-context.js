import React from "react";

export const WeatherContext = React.createContext({
    fetchCity: () => {},
    cityObject: null
})


const WeatherContextProvider = (props) => {
    const api_key = '5fc53b4163498db65d6329e64f584aea'
    const fetchCity = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${api_key}`)
        .then(res => res.json())
        .then(data => console.log(data))
      }

      const providerValue = {
          fetchCity: fetchCity,
          cityObject: null
      }

      return (
          <WeatherContext.Provider value={providerValue}>
              {props.children}
          </WeatherContext.Provider>
      )
}

export default WeatherContextProvider