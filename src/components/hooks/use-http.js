import { useState } from "react"
import { WeatherContext } from "../../store/weather-context"
import { useContext, } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const weatherCtx = useContext(WeatherContext)

    const getCityData = async (url) => {
        setError(false)
        setIsLoading(true)
        

          try {
                const response  = await fetch(url)
                if (!response.ok) {
                    setIsLoading(false)
                    setError(true)
                    throw new Error('City was not found.')
                }
                const data = await response.json()
                console.log(data)
                weatherCtx.setCity(data)
                weatherCtx.setId(data.weather[0].id)
                setIsLoading(false)
                
          } catch (err) {
              setIsLoading(false)
              setError(err.message || 'Something went wrong')
              
          }


    }
       
          return {
              isLoading,
              error,
              getCityData,
              
          }
    }

    export default useHttp
       
