import { useState } from "react"
import { WeatherContext } from "../../store/weather-context"
import { useContext, useCallback } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const weatherCtx = useContext(WeatherContext)

    const getCityData = useCallback((url) => {
        setIsLoading(true)
        const fetchCity = async () => {
            const response  = await fetch(url)
            if (!response.ok) {
                throw new Error('City was not found.')
            }
            const data = await response.json()
            return data
            
          }

          try {
            fetchCity().then(res => {
                console.log(res)
                weatherCtx.setCity(res)
                setIsLoading(false)
                
            })
          } catch (err) {
              console.log(err)
              setIsLoading(false)
          }


    })
       
          return {
              isLoading,
              error,
              getCityData
          }
    }

    export default useHttp
       
