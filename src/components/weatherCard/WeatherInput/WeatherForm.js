import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef, useContext} from 'react'
import useHttp from '../../hooks/use-http'
import { WeatherContext } from '../../../store/weather-context'

const WeatherForm = (props) => {
   
   
    const locationInputRef = useRef()
    const api_key = '5fc53b4163498db65d6329e64f584aea'
    const {getCityData} = useHttp()
    const weatherCtx = useContext(WeatherContext)


    const onSubmitHandler =  (e) =>{
        e.preventDefault()
        getCityData(`https://api.openweathermap.org/data/2.5/weather?q=${locationInputRef.current.value.trim()}&units=metric&appid=${api_key}`)
    }   

    const onSubmitHandlerRandom = (e) => {
        e.preventDefault();
       navigator.geolocation.getCurrentPosition((pos) => {
            const {latitude, longitude} = pos.coords
            getCityData(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
        })
    }



    return(
        <React.Fragment>
            <div className={styles.formsContainer}>
                <form  onSubmit={onSubmitHandler}>
                    <div className={styles.form}>   
                        <input ref={locationInputRef} type="text" />
                        <button className={`${styles.formButton} ${styles.getButton}`}  type='submit'>{weatherCtx.loading  ? 'is loading...' : 'Get weather'}</button>
                    </div>
                </form>
                <form onSubmit={onSubmitHandlerRandom}>
                    <div className={styles.form}>   
                        <button className={`${styles.formButton} ${styles.randomButton}` } type='submit'>{weatherCtx.loading   ? 'is loading...' : 'Get your location'}</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
        
    )
}

export default WeatherForm