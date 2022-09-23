import React from 'react'
import './Navbar.scss'
import instagramIcon from '../img/Instagram.png'
import linkedInIcon from '../img/LinkedIn.png'
import telegramIcon from '../img/telegram.png'

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
    })

    function toggleClick() {
        console.log(toggle)
        setToggle((toggle) => !toggle)
    }

    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo" href="#">bratva.dev<br /><span>the best way to get result</span></a>
                <div className={`menu ${toggle ? 'menu-open' : ''}`}>
                    {isTablet && <div className="menu__languages">
                        <button>EN</button>
                        <button>UA</button>
                        <button>GER</button>
                    </div>}
                    <nav className="menu__nav">
                        <ul className="menu__list">
                            <li><a href="#" className="menu__link">about</a></li>
                            <li><a href="#" className="menu__link">solutions</a></li>
                            <li><a href="#" className="menu__link">Technologies</a></li>
                            <li><a href="#" className="menu__link">Cases</a></li>
                            <li><a href="#" className="menu__link">Team</a></li>
                            {isTablet && <li><a href="#" className="menu__link">Let`s Talk</a></li>}
                        </ul>
                    </nav>
                    {isTablet &&
                        <div className="menu__socials">
                            <img src={instagramIcon} alt="" />
                            <img src={linkedInIcon} alt="" />
                            <img src={telegramIcon} alt="" />
                        </div>}
                </div>
                {!isTablet &&
                    <div className="header__right right-header">
                        <a href="#" className="right-header__link">Let`s Talk</a>
                        <button href="#" className="right-header__languages">ENG/UA/GER</button>
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