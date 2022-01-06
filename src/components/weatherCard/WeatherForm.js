import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../store/weather-context'

const WeatherForm = (props) => {
    const [isLoading, setIsLoading] = useState('false')


    const locationInputRef = useRef()
    const weatherCtx = useContext(WeatherContext)
    const api_key = '5fc53b4163498db65d6329e64f584aea'


    const onSubmitHandler =  (e) =>{
        setIsLoading(true)
        e.preventDefault()
        const fetchCity = async () => {
            const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInputRef.current.value.trim()}&appid=${api_key}`)
            const data = await response.json()
            return data
            
          }
          fetchCity().then(res => {
              console.log(res)
              weatherCtx.setCity(res)
              
          })

          setIsLoading(false)
          
    }   

    return(
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <input ref={locationInputRef} type="text" />
                <button type='submit'>{isLoading ? 'is loading...' : 'Get weather'}</button>
            </form>
            
        </React.Fragment>
        
    )
}

export default WeatherForm