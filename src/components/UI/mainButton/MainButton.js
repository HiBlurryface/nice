import styles from './MainButton.module.scss'

function MainButton({type,children}) {
    return <button type={type} className={styles.button}>{children}</button>
}

export default MainButton