import { useState } from "react"
import { WeatherContext } from "../../store/weather-context"
import { useContext} from "react"

const useHttp = () => {
    const weatherCtx = useContext(WeatherContext)

    const getCityData = async (url) => {
        weatherCtx.setLoading(true)
        weatherCtx.setError(null)
        

          try {
                const response  = await fetch(url)
                
                if (!response.ok) {
                    setIsLoading(false)
                    throw new Error('City was not found.')
                }
                const data = await response.json()
                weatherCtx.setCity(data)
                weatherCtx.setId(data.weather[0].id)
                weatherCtx.setLoading(false)
                weatherCtx.setError(false)
                
          } catch (err) {
              weatherCtx.setLoading(false)
              weatherCtx.setError(true)
          }


    }

       
          return {
              getCityData,
          }
    }

    export default useHttp
       
