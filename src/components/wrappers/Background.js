import styles from './Background.module.css'

const Background = (props) => {
    return (
        <div className={styles.Background}>
            {props.children}
        </div>
    )
   
}

export default Background