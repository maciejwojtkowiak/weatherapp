import React, { useState } from "react";

export const WeatherContext = React.createContext({
    city: null,
    id:null
})


const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('')
    const [id, setId] = useState('')
   
     

      return (
          <WeatherContext.Provider value={{city, setCity, id, setId}}>
              {props.children}
          </WeatherContext.Provider>
      )
}

export default WeatherContextProvider