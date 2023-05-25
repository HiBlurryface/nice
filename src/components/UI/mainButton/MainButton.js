import styles from './MainButton.module.scss'

function MainButton({children}) {
    return <button className={styles.button}>{children}</button>
}

export default MainButton