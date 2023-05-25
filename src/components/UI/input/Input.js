import styles from './Input.module.scss'

function Input(props) {
    return <div className={styles.wrapper}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label>
        <input type={props.type} id={props.id} placeholder={props.placeholder} className={styles.input} />
    </div>
}

export default Input