import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../store/weather-context'

const WeatherForm = (props) => {
    let city;
    const locationInputRef = useRef()
    const weatherCtx = useContext(WeatherContext)
    const api_key = '5fc53b4163498db65d6329e64f584aea'
    const onSubmitHandler =  (e) =>{
        city = locationInputRef.current.value
        e.preventDefault()
        const fetchCity = async (city) => {
            const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${api_key}`)
            const data = await response.json()
            return data
            
          }
          // użyj useState
          fetchCity(city).then(res => {
              console.log(res)
              weatherCtx.setCity(res)
          })
          
    }   

    return(
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <input ref={locationInputRef} type="text" />
                <p>{city}</p>
                <button type='submit'>Get weather</button>
            </form>
            
        </React.Fragment>
        
    )
}

export default WeatherForm