import styles from './TransparentButton.module.scss'

function TransparentButton({children}) {
    return <button className={styles.button}>{children}</button>
}

export default TransparentButton