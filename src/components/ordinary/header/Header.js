import styles from './Header.module.scss';
import logo from 'assets/images/logo.svg'
import instagram from 'assets/images/instagram.svg'
import facebook from 'assets/images/facebook-f.svg'
import { useState } from 'react';
import classNames from 'classnames';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen) {
        document.querySelector('body').classList.add("lock")
    } else {
        document.querySelector('body').classList.remove("lock");
    }
    return <header className={styles.wrapper}>
        <div className={styles.container}>
            <button onClick={() => setIsOpen(!isOpen)} className={classNames(styles.burger, { [`${styles.active}`]: isOpen })}>
                <span className={styles.burger__top}></span>
                <span className={styles.burger__center}></span>
                <span className={styles.burger__bottom}></span>
            </button>
            <a href='#' className={styles.logo}>
                <img src={logo} alt="nice-logo" className={styles.icon} />
            </a>
            <nav className={classNames(styles.menu, { [`${styles.menu__active}`]: isOpen })}>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>o que fazemos</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>como te ajudamos</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>fale conosco</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.social}>
                <a href="#" className={styles.social__link}>
                    <img src={instagram} alt="instagram" className={styles.social__icon} />
                </a>
                <a href="#" className={styles.social__link}>
                    <img src={facebook} alt="facebook" className={styles.social__icon} />
                </a>
            </div>
        </div>
    </header>
}

export default Header