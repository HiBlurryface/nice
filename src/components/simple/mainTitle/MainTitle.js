import styles from './MainTitle.module.scss'

function MainTitle({children}) {
    return <h1 className={styles.title}>{children}</h1>
}

export default MainTitle