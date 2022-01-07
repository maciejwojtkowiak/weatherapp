import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../store/weather-context'
import useHttp from '../hooks/use-http'

const WeatherForm = (props) => {
   
   
    const locationInputRef = useRef()
    const api_key = '5fc53b4163498db65d6329e64f584aea'
    const {isLoading, getCityData} = useHttp()
    const onSubmitHandler =  (e) =>{
        e.preventDefault()
        getCityData(`https://api.openweathermap.org/data/2.5/weather?q=${locationInputRef.current.value.trim()}&units=metric&appid=${api_key}`)
    }   

    const onSubmitHandlerRandom = (e) => {
        e.preventDefault();
       

        console.log(navigator.geolocation.getCurrentPosition((pos) => {
            const {latitude, longitude} = pos.coords
            console.log(latitude, longitude)
        }))

    }

    return(
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <div className={styles.formContainer}>   
                    <input ref={locationInputRef} type="text" />
                    <button type='submit'>{isLoading  ? 'is loading...' : 'Get weather'}</button>
                </div>
            </form>
            <form onSubmit={onSubmitHandlerRandom}>
                <div className={styles.formContainer}>   
                    <button type='submit'>{isLoading  ? 'is loading...' : 'Get your location'}</button>
                </div>
            </form>
            
        </React.Fragment>
        
    )
}

export default WeatherForm