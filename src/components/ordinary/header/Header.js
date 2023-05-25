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
                        <a href="" className={styles.menu__link}>o que fazemos</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>como te ajudamos</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>fale conosco</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.social}>
                <a href="" className={styles.social__link}>
                    <svg className={styles.social__icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0039 5.50781C7.51953 5.50781 5.51562 7.51172 5.51562 9.99609C5.51562 12.4805 7.51953 14.4844 10.0039 14.4844C12.4883 14.4844 14.4922 12.4805 14.4922 9.99609C14.4922 7.51172 12.4883 5.50781 10.0039 5.50781ZM10.0039 12.9141C8.39844 12.9141 7.08594 11.6055 7.08594 9.99609C7.08594 8.38672 8.39453 7.07812 10.0039 7.07812C11.6133 7.07812 12.9219 8.38672 12.9219 9.99609C12.9219 11.6055 11.6094 12.9141 10.0039 12.9141ZM15.7227 5.32422C15.7227 5.90625 15.2539 6.37109 14.6758 6.37109C14.0938 6.37109 13.6289 5.90234 13.6289 5.32422C13.6289 4.74609 14.0977 4.27734 14.6758 4.27734C15.2539 4.27734 15.7227 4.74609 15.7227 5.32422ZM18.6953 6.38672C18.6289 4.98438 18.3086 3.74219 17.2812 2.71875C16.2578 1.69531 15.0156 1.375 13.6133 1.30469C12.168 1.22266 7.83594 1.22266 6.39062 1.30469C4.99219 1.37109 3.75 1.69141 2.72266 2.71484C1.69531 3.73828 1.37891 4.98047 1.30859 6.38281C1.22656 7.82812 1.22656 12.1602 1.30859 13.6055C1.375 15.0078 1.69531 16.25 2.72266 17.2734C3.75 18.2969 4.98828 18.6172 6.39062 18.6875C7.83594 18.7695 12.168 18.7695 13.6133 18.6875C15.0156 18.6211 16.2578 18.3008 17.2812 17.2734C18.3047 16.25 18.625 15.0078 18.6953 13.6055C18.7773 12.1602 18.7773 7.83203 18.6953 6.38672ZM16.8281 15.1562C16.5234 15.9219 15.9336 16.5117 15.1641 16.8203C14.0117 17.2773 11.2773 17.1719 10.0039 17.1719C8.73047 17.1719 5.99219 17.2734 4.84375 16.8203C4.07812 16.5156 3.48828 15.9258 3.17969 15.1562C2.72266 14.0039 2.82813 11.2695 2.82813 9.99609C2.82813 8.72266 2.72656 5.98438 3.17969 4.83594C3.48438 4.07031 4.07422 3.48047 4.84375 3.17187C5.99609 2.71484 8.73047 2.82031 10.0039 2.82031C11.2773 2.82031 14.0156 2.71875 15.1641 3.17187C15.9297 3.47656 16.5195 4.06641 16.8281 4.83594C17.2852 5.98828 17.1797 8.72266 17.1797 9.99609C17.1797 11.2695 17.2852 14.0078 16.8281 15.1562Z" />
                    </svg>
                </a>
                <a href="" className={styles.social__link}>
                    <svg className={styles.social__icon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1885 10.125L13.6885 6.86742H10.5627V4.75348C10.5627 3.86227 10.9994 2.99355 12.3993 2.99355H13.8203V0.220078C13.8203 0.220078 12.5308 0 11.2978 0C8.72369 0 7.04112 1.56023 7.04112 4.38469V6.86742H4.17975V10.125H7.04112V18H10.5627V10.125H13.1885Z" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
}

export default Header