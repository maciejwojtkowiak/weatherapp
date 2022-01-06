import styles from './WeatherForm.module.css'
import React from 'react'
import { useRef } from 'react'

const WeatherForm = () => {
    const locationInputRef = useRef()
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        fetch('api.openweathermap.org/data/2.5/weather?q=' + locationInputRef.current.value + '&appid=6759a0b0331f10b0f104c6ff1841a20e')
        .then(res => res.json()).then(data => console.log(data))
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