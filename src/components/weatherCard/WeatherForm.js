import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../store/weather-context'

const WeatherForm = (props) => {
    const locationInputRef = useRef()
    const weatherCtx = useContext(WeatherContext)
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        const city = locationInputRef.current.value
        weatherCtx.fetchCity(city)
        
    }   

    return(
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <input ref={locationInputRef} type="text" />
                <button type='submit'>Get weather</button>
            </form>
            
        </React.Fragment>
        
    )
}

export default WeatherForm