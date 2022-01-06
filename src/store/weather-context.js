import React, { useState } from "react";

export const WeatherContext = React.createContext({
    cityObject: null
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