import React, { useState } from "react";

export const WeatherContext = React.createContext({
    city: null,
    id:null
})


const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('')
    const [id, setId] = useState('')
    const [error, setError] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
   
     

      return (
          <WeatherContext.Provider value={{city, setCity, id, setId, error, setError, isClicked, setIsClicked}}>
              {props.children}
          </WeatherContext.Provider>
      )
}

export default WeatherContextProvider