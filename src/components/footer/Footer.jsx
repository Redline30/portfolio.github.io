/* Img */
    import planet from './img/planet.png'

/* Context */
    import { useContext} from 'react';
    import LangContext from '../../context/languages';

const Footer = () => {
    
    const { texts  } = useContext(LangContext);

    return(
        <section className="section footerSec">
                <footer className="adew">
                    <div className="adew__container">
                        <h2>{texts.footer.title}</h2>
                        <a className="container__contactNow txt_changed" target="_blank" href="mailto:martinarielgalenda@gmail.com">
                            <p id="t1">- {texts.footer.together.t1} -</p>
                            <p id="t2">- {texts.footer.together.t2} -</p>
                            <p id="t3">- {texts.footer.together.t3} -</p>
                        </a>
                        <a className="go-top" href="#homeSec"></a>
                        <img className="adew__planet" src={planet} alt="planet" />
                    </div>
                </footer>
        </section>
    )
}

export default Footer