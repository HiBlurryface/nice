import styles from 'assets/styles/App.module.scss'
import 'assets/styles/fonts.scss';
import 'assets/styles/reset.scss';
import MainButton from 'components/UI/mainButton/MainButton';
import TransparentButton from 'components/UI/transparentButton/TransparentButton';
import Header from 'components/ordinary/header/Header';
import MainTitle from 'components/simple/mainTitle/MainTitle';

import introImg from 'assets/images/man-intro.png'
import blur from 'assets/images/gradient-blur.png'
import SectionTitle from 'components/simple/sectionTitle/SectionTitle';

import target from 'assets/images/target.png';
import etherium from 'assets/images/ethereum-coin.png';
import cards from 'assets/images/credit-card.png'

import qualityBg from 'assets/images/quality-bg.png'
import qualityImg from 'assets/images/man-quality.png'

import chatIcon from 'assets/images/chat.png'
import whatsAppIcon from 'assets/images/whatsapp-icon.svg'
import Input from 'components/UI/input/Input';
import Footer from 'components/ordinary/footer/Footer';

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
                            <MainButton type="button">Eu quero!</MainButton>
                            <TransparentButton type="button">Conhecer mais</TransparentButton>
                        </div>
                    </div>
                    <div className={styles.intro__img}>
                        <img src={introImg} alt="Businessman investing in bitcoin" className={styles.intro__pic} />
                        <img src={blur} alt="blur" className={styles.intro__blur} />
                    </div>
                </div>
            </div>
        </div>
        <main className={styles.main}>
            <section className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.about__wrapper}>
                        <div className={styles.about__info}>
                            <SectionTitle>Um subtítulo para quem rolou até aqui!</SectionTitle>
                            <h3 className={styles.about__subtitle}>Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.</h3>
                        </div>
                        <div className={styles.about__content}>
                            <div className={styles.about__block}>
                                <div className={styles.about__block_img}>
                                    <img src={target} alt="target" className={styles.about__block_pic} />
                                </div>
                                <h4 className={styles.about__block_title}>Rápido</h4>
                                <p className={styles.about__block_text}>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</p>
                                <button className={styles.about__block_btn}></button>
                            </div>
                            <div className={styles.about__block}>
                                <div className={styles.about__block_img}>
                                    <img src={etherium} alt="etherium" className={styles.about__block_pic} />
                                </div>
                                <h4 className={styles.about__block_title}>Do seu jeito</h4>
                                <p className={styles.about__block_text}>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</p>
                                <button className={styles.about__block_btn}></button>
                            </div>
                            <div className={styles.about__block}>
                                <div className={styles.about__block_img}>
                                    <img src={cards} alt="cards" className={styles.about__block_pic} />
                                </div>
                                <h4 className={styles.about__block_title}>Como você queria</h4>
                                <p className={styles.about__block_text}>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</p>
                                <button className={styles.about__block_btn}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.quality}>
                <div className={styles.container}>
                    <img src={qualityBg} alt="background" className={styles.quality__bg} />
                    <div className={styles.quality__wrapper}>
                        <div className={styles.quality__info}>
                            <p className={styles.quality__tag}>#contecomagente</p>
                            <h2 className={styles.quality__title}>Simples, rápido e do seu jeito.</h2>
                            <p className={styles.quality__text}>Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para <a href="" className={styles.quality__link}>conquistar seu cliente.</a></p>
                            <MainButton type="button">Eu quero!</MainButton>
                        </div>
                        <div className={styles.quality__img}>
                            <img src={qualityImg} alt="Man with phone" className={styles.quality__pic} />
                            {/* <img src={blur} alt="blur" className={styles.quality__blur} /> */}
                        </div>
                    </div>
                </div>
                <p className={styles.quality__note}>Todas as imagens deste template são do Iconscout.</p>
            </section>
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contact__wrapper}>
                        <div className={styles.contact__header}>
                            <img src={chatIcon} alt="chat" className={styles.contact__img} />
                            <SectionTitle>Ainda tem dúvidas? Fale conosco!</SectionTitle>
                        </div>
                        <div className={styles.contact__content}>
                            <div className={styles.contact__info}>
                                <p className={styles.contact__text}>Ofereça um meio de comunicação direto. Pode ser um <a href="">contato@email.com.br</a></p>
                                <p className={styles.contact__text}>Ou crie um formulário ao lado que entrem em contato <span>o mais rápido possível!</span></p>
                                <a href="" className={styles.contact__phone}>
                                    <img src={whatsAppIcon} alt="What'sApp" className={styles.contact__phone_icon} />
                                    Hey! Estamos no whatsapp!
                                </a>
                            </div>
                            <form action="" className={styles.contact__form}>
                                <Input
                                    label="Name"
                                    type="text"
                                    id="name"
                                    placeholder="Nome Sobrenome"
                                />
                                <Input
                                    label="Email"
                                    type="text"
                                    id="email"
                                    placeholder="nome@email.com.br"
                                />
                                <Input
                                    label="Telephone"
                                    type="number"
                                    id="phone"
                                    placeholder="21 9988-7766"
                                />
                                <MainButton type="submit">Enviar!</MainButton>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}
export default App;