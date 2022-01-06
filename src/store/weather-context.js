import React, { useState } from "react";

export const WeatherContext = React.createContext({
    city: null
})


const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('')
   
     

      return (
          <WeatherContext.Provider value={{city, setCity}}>
              {props.children}
          </WeatherContext.Provider>
      )
}

export default WeatherContextProvider