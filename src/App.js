import styles from 'assets/styles/App.module.scss'
import 'assets/styles/fonts.scss';
import 'assets/styles/reset.scss';
import MainButton from 'components/UI/mainButton/MainButton';
import TransparentButton from 'components/UI/transparentButton/TransparentButton';
import Header from 'components/ordinary/header/Header';
import MainTitle from 'components/simple/mainTitle/MainTitle';

import introImg from 'assets/images/man-intro.png'
import blur from 'assets/images/gradient-blur.png'

function App() {
    return <>
        <Header />
        <div className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.intro__wrapper}>
                    <div className={styles.intro__text}>
                        <MainTitle>Um slogan chamativo aqui.</MainTitle>
                        <h2 className={styles.intro__subtitle}>
                            Um texto sobre o seu produto ou serviço. Explique <a href="" className={styles.intro__link}>porque ele é valioso</a> e
                            direcione o usuário ao próximo objetivo.
                        </h2>
                        <div className={styles.intro__buttons}>
                            <MainButton>Eu quero!</MainButton>
                            <TransparentButton>Conhecer mais</TransparentButton>
                        </div>
                    </div>
                    <div className={styles.intro__img}>
                        <img src={introImg} alt="Businessman investing in bitcoin" className={styles.intro__pic} />
                        <img src={blur} alt="blur" className={styles.intro__blur} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default App;