import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../store/weather-context'

const WeatherForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)


    const locationInputRef = useRef()
    const weatherCtx = useContext(WeatherContext)
    const api_key = '5fc53b4163498db65d6329e64f584aea'


    const onSubmitHandler =  (e) =>{
        setIsLoading(true)
        e.preventDefault()
        const fetchCity = async () => {
            const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInputRef.current.value.trim()}&appid=${api_key}`)
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
                    <button type='submit'>{isLoading  ? 'is loading...' : 'Random localization'}</button>
                </div>
            </form>
            
        </React.Fragment>
        
    )
}

export default WeatherForm