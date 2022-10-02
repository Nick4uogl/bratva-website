import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import instagramIcon from '../../img/Instagram.png'
import linkedInIcon from '../../img/LinkedIn.png'
import telegramIcon from '../../img/telegram.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 991 ? true : false)
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 991) {
                setIsTablet(true)
            } else {
                setIsTablet(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    }, [])

    function toggleClick() {
        console.log(toggle)
        setToggle((toggle) => !toggle)
    }

    return (
        <header className="header">
            <div className="header__container">
                <NavLink to={"/"} className="header__logo">bratva.dev<br /><span>the best way to get result</span></NavLink>
                <div className={`menu ${toggle ? 'menu-open' : ''}`}>
                    {isTablet && <div className="menu__languages">
                        <button>EN</button>
                        <button>UA</button>
                        <button>GER</button>
                    </div>}
                    <nav className="menu__nav">
                        <ul className="menu__list">
                            <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="menu__link" onClick={() => setToggle(false)}>about</Link></li>
                            <li><Link to="solutions" spy={true} smooth={true} offset={-90} duration={500} className="menu__link" onClick={() => setToggle(false)}>solutions</Link></li>
                            <li><Link to="technologies" spy={true} smooth={true} offset={-70} duration={500} className="menu__link" onClick={() => setToggle(false)}>Technologies</Link></li>
                            <li><Link to="cases" spy={true} smooth={true} offset={-70} duration={500} className="menu__link" onClick={() => setToggle(false)}>Cases</Link></li>
                            <li><Link to="team" spy={true} smooth={true} offset={-70} duration={500} className="menu__link" onClick={() => setToggle(false)}>Team</Link></li>
                            {isTablet && <li><Link to="talk" spy={true} smooth={true} offset={-70} duration={500} className="menu__link" onClick={() => setToggle(false)}>Let`s Talk</Link></li>}
                        </ul>
                    </nav>
                    {isTablet &&
                        <div className="menu__socials">
                            <a href='#'><img src={instagramIcon} alt="" /></a>
                            <a href='#'><img src={linkedInIcon} alt="" /></a>
                            <a href='#'><img src={telegramIcon} alt="" /></a>
                        </div>}
                </div>
                {!isTablet &&
                    <div className="header__right right-header">
                        <Link to="talk" spy={true} smooth={true} offset={-70} duration={500} className="right-header__link">Let`s Talk</Link>
                        <button className="right-header__languages">ENG/UA/GER</button>
                    </div>
                }
                {isTablet &&
                    <div className={`menu-burger ${toggle ? 'menu-open' : ''}`} onClick={toggleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            </div>
        </header>
    )
}