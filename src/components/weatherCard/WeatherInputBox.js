import WeatherForm from "./WeatherForm"
import styles from './WeatherInputBox.module.css'

const WeatherInputBox = (props) => {
    return (
        <div className={styles.weatherInputBox}> 
            <WeatherForm /> 
        </div>
       
    )
}

export default WeatherInputBox