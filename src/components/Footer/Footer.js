import './Footer.scss'
import instagramIcon from '../../img/Instagram.png'
import linkedInIcon from '../../img/LinkedIn.png'
import telegramIcon from '../../img/telegram.png'
import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__column">
                        <a className='footer__logo' href="/#">bratva.dev <br /><span>the best way to get result</span></a>
                        <ul className="footer__list">
                            <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">About</Link></li>
                            <li><Link to="solutions" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">Solutions</Link></li>
                            <li><Link to="technologies" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">Technologies</Link></li>
                            <li><Link to="cases" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">Cases</Link></li>
                            <li><Link to="team" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">Team</Link></li>
                        </ul>
                    </div>
                    <div className="footer__products products-footer">
                        <h2 className="products-footer__title">products</h2>
                        <ul className="footer__list">
                            <li><a href="/#" className="footer__link">bratva.dev</a></li>
                            <li><a href="/#" className="footer__link">bratva.courses</a></li>
                            <li><a href="/#" className="footer__link">bratva.cloud</a></li>
                            <li><a href="/#" className="footer__link">bratva.design</a></li>
                            <li><a href="/#" className="footer__link">bratva.bike</a></li>
                        </ul>
                    </div>
                    <div className="footer__socials">
                        <a href='/#'><img src={instagramIcon} alt="" /></a>
                        <a href='/#'><img src={linkedInIcon} alt="" /></a>
                        <a href='/#'><img src={telegramIcon} alt="" /></a>
                    </div>
                </div>
                <div className="footer__copyright">
                    © 2022 Bratva.dev Corporation.
                    All rights reserved.
                </div>
            </div>
        </footer>
    )
}