import React, { useState } from "react";

export const WeatherContext = React.createContext({
    city: null,
    id:null
})


const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('')
    const [id, setId] = useState('')
    const [error, setError] = useState('')
   
     

      return (
          <WeatherContext.Provider value={{city, setCity, id, setId, error, setError}}>
              {props.children}
          </WeatherContext.Provider>
      )
}

export default WeatherContextProvider