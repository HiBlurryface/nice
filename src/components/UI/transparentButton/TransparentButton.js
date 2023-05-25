import styles from './TransparentButton.module.scss'

function TransparentButton({type,children}) {
    return <button type="submit" className={styles.button}>{children}</button>
}

export default TransparentButton