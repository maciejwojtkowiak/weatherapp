import styles from './WeatherDataBox.module.css'
import React, { useContext, useState } from 'react'
import { WeatherContext } from '../../../store/weather-context'
import WeatherDetailBox from './WeatherDetailBox'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './WeatherDataBox.css'
import {
    WiDayThunderstorm, 
    WiDayRainMix, 
    WiRain, 
    WiSnow, 
    WiDaySunny, 
    WiCloudy,
    WiFog,
    WiSmoke,
    WiDayHaze,
    WiDust,
    WiSandstorm,
    WiTornado} from 'weather-icons-react'


const WeatherDataBox = () => {
    let content;
    let icon;
    let ICON_SIZE = 256
    let VIEWBOX = "5 5 20 20"
    let success = false;
    let error = false;
    const weatherCtx = useContext(WeatherContext);
    const [isWeatherMounted, setWeatherIsMounted] = useState(false)
    const [errorIsMounted, setErrorIsMounted] = useState(false)
    const [isInitial, setIsInitial] = useState(true)

    

    if (weatherCtx.city) {
        success = weatherCtx.city && !weatherCtx.error && !errorIsMounted && !weatherCtx.loading
    }

    error = weatherCtx.error && !isWeatherMounted


    const atmosphereIcons = () => {
        if ((weatherCtx.id === 701)) icon=<WiFog viewbox={VIEWBOX} size={ICON_SIZE} /> // Mist
        if ((weatherCtx.id === 711)) icon=<WiSmoke viewBox={VIEWBOX} size={ICON_SIZE} /> // Smoke
        if ((weatherCtx.id === 721)) icon=<WiDayHaze viewBox={VIEWBOX} size={ICON_SIZE} /> // Haze
        if ((weatherCtx.id === 731)) icon=<WiSandstorm viewBox={VIEWBOX} size={ICON_SIZE} /> // Dust whirls
        if ((weatherCtx.id === 741)) icon=<WiFog viewBox={VIEWBOX} size={ICON_SIZE} /> // Fog
        if ((weatherCtx.id === 751)) icon=<WiSnow viewBox={VIEWBOX} size={ICON_SIZE} /> // Sand
        if ((weatherCtx.id === 761)) icon=<WiDust viewBox={VIEWBOX} size={ICON_SIZE} /> // Dust 
        if ((weatherCtx.id === 762)) icon=<WiDust viewBox={VIEWBOX} size={ICON_SIZE} /> // Ash
        if ((weatherCtx.id === 771)) icon=<WiFog viewBox={VIEWBOX} size={ICON_SIZE} /> // Squall
        if ((weatherCtx.id === 781)) icon=<WiTornado viewBox={VIEWBOX} size={ICON_SIZE} /> // Tornado
    }




    if (weatherCtx.id) {
        if ((weatherCtx.id >= 200) && (weatherCtx.id <= 231)) icon=<WiDayThunderstorm viewBox={VIEWBOX} size={ICON_SIZE} /> // Thunderstorm
        if ((weatherCtx.id >= 300) && (weatherCtx.id <= 320)) icon=<WiDayRainMix viewBox={VIEWBOX} size={ICON_SIZE} /> // Drizzle
        if ((weatherCtx.id >= 500) && (weatherCtx.id <= 531)) icon=<WiRain viewBox={VIEWBOX} size={ICON_SIZE} /> // Rain
        if ((weatherCtx.id >= 600) && (weatherCtx.id <= 632)) icon=<WiSnow viewBox={VIEWBOX} size={ICON_SIZE} /> // Snow
        atmosphereIcons() // Logic for atmosphere icons 
        if ((weatherCtx.id === 800)) icon=<WiDaySunny size={ICON_SIZE} /> // Clear Sky
        if ((weatherCtx.id >= 801) && (weatherCtx.id <= 804)) icon=<WiCloudy viewBox={VIEWBOX}  size={ICON_SIZE}  /> // Clouds

    }

   
    if (weatherCtx.error) {
        content = (<p>City not found, try again.</p>)
    }

    if (success) {
        content = (
                <React.Fragment>
                     <div className={styles.icon} >{icon}</div>
                        <p className={styles.description}>{weatherCtx.city.name}</p>
                        <p className={styles.description}>{weatherCtx.city.weather[0].main}</p>
                    <WeatherDetailBox />
                </React.Fragment>
            
        )
    }
    
    return(
        <React.Fragment>
           
            <CSSTransition mountOnEnter unmountOnExit in={error} timeout={500} classNames='error' 
            onEnter={() => {
                if (isInitial) {
                    setErrorIsMounted(true)
                    setIsInitial(false)
                }
            }} 
            onExited={() => {
                setErrorIsMounted(false) 
                setWeatherIsMounted(true)
                }} >
            <div className={styles.error}>{content}</div>
               
            </CSSTransition>
            <TransitionGroup>

            </TransitionGroup>
            <CSSTransition key={weatherCtx.city.name} mountOnEnter unmountOnExit in={success}  timeout={500} classNames='weather' 
            onEnter={() => {
                if (isInitial) {
                    setWeatherIsMounted(true)
                    setIsInitial(false)
                }
            }} 
            onExited={() => {
                setWeatherIsMounted(false)
                setErrorIsMounted(true)
            }}>
            <div className={styles.weatherDataBox}>{content}</div>
            </CSSTransition>
            
        </React.Fragment>
            
       
        
    )
}

export default WeatherDataBox