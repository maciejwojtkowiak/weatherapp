import styles from './WeatherDataBox.module.css'
const WeatherDataBox = (props) => {
    return(
        <div className={styles.weatherDataBox}>{props.children}</div>
    )
}

export default WeatherDataBox