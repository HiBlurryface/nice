import styles from './Footer.module.scss';
import logo from 'assets/images/logo.svg'
import instagram from 'assets/images/instagram.svg'
import facebook from 'assets/images/facebook-f.svg'

function Footer() {
    return <footer className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.heading}>
                <a href='#' className={styles.logo}>
                    <img src={logo} alt="nice-logo" className={styles.icon} />
                </a>
                <div className={styles.group}>
                    <nav className={styles.menu}>
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
                            <img src={instagram} alt="instagram" className={styles.social__icon} />
                        </a>
                        <a href="" className={styles.social__link}>
                            <img src={facebook} alt="facebook" className={styles.social__icon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.mailing}>
                <p className={styles.mailing__text}>Receba as novidades do nice</p>
                <form className={styles.mailing__group}>
                    <input type="text" placeholder="nome@email.com" id="email" className={styles.mailing__input} />
                    <button type='submit' className={styles.mailing__btn}>Inscrever</button>
                </form>
            </div>
            <div className={styles.bottom}>
                <p className={styles.bottom__text}>Nice template by @lopesluiza on Figma - 2021</p>
            </div>
        </div>
    </footer>
}

export default Footer