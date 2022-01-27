import { useState } from "react"
import { WeatherContext } from "../../store/weather-context"
import { useContext} from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const weatherCtx = useContext(WeatherContext)

    const getCityData = async (url) => {
        setIsLoading(true)
        weatherCtx.setError(null)
        

          try {
                const response  = await fetch(url)
                
                if (!response.ok) {
                    setIsLoading(false)
                    throw new Error('City was not found.')
                }
                const data = await response.json()
                console.log(data)
                weatherCtx.setCity(data)
                weatherCtx.setId(data.weather[0].id)
                setIsLoading(false)
                weatherCtx.setError(false)
                
          } catch (err) {
              setIsLoading(false)
              weatherCtx.setError(true)
          }


    }

       
          return {
              isLoading,
              getCityData,
              
          }
    }

    export default useHttp
       
