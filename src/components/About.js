import React from 'react'
import upworkImg from '../img/upwork.png'
import './About.scss'
import { motion } from "framer-motion"

// Import Swiper styles
import 'swiper/scss';

export default function About() {
    const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 991 ? true : false)
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 767 ? true : false)
    const [carouselWidthToScroll, setCarouselWidthToScroll] = React.useState()

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 991) {
                setIsTablet(true)
            } else {
                setIsTablet(false)
            }
            if (window.innerWidth <= 767) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        setCarouselWidthToScroll(carousel.current.scrollWidth - carousel.current.offsetWidth)
        console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    }, [])

    const carousel = React.useRef()

    return (
        <section className='about'>
            <div className="about__container">
                <div className="about__top top-about">
                    <div className={`top-about__left ${isMobile ? "hidden" : ""}`}>
                        <h2 className="top-about__title">Products&amp;Services&amp;Partners</h2>
                        <motion.div className='top-about__carousel' ref={carousel}>
                            <motion.div className="top-about__services services-about"
                                drag={isMobile ? "x" : ""}
                                dragConstraints={{ left: 0, right: -carouselWidthToScroll }}

                            >
                                <motion.div>
                                    <a href="/#" className="services-about__item">bratva courses</a>
                                </motion.div>
                                <motion.div>
                                    <a href="/#" className="services-about__item">bratva cloud</a>
                                </motion.div>
                                <motion.div>
                                    <a href="/#" className="services-about__item">bratva design</a>
                                </motion.div>
                                <motion.div>
                                    <a href="/#" className="services-about__item services-about__item_u"><img src={upworkImg} alt="" /></a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                    {!isTablet && <div className="top-about__right">
                        We have three subsidiaries from bratva.dev
                        We also provide services on UpWork
                    </div>}
                </div>
                <div className="about__company company-about">
                    <h2 className="company-about__title">About company</h2>
                    <div className="company-about__row">
                        <div className="company-about__advantages advantages-about">
                            <div className="advantages-about__item">Hello! We are  Ukrainian tech company bratva.dev
                                And we do not want to talk about how well we do projects and what experience we have - we want to talk about our non-standard approach to work.
                            </div>
                            {!isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">The first thing we want to say is that almost every day we have online meetings and discuss ideas for new concepts of the web
                                    outside of work - what makes us unique.
                                </div>}
                            {!isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">The second is that we strictly adhere to project management methodologies and all our fellow workers are growing specialists in their stack.
                                </div>}
                        </div>
                        <div className="company-about__graph graph-about">
                            <h2 className="graph-about__title">Average arithmetic growth of the company after the implementation of our services</h2>
                            <div className="graph-about__block">
                                <div className="graph-about__lines"></div>
                                <div className="graph-about__chart">
                                    <div className="graph-about__growth graph-about__growth_before">growth chart before cooperation</div>
                                    <div className="graph-about__growth graph-about__growth_after">growth chart after cooperation</div>
                                </div>
                            </div>
                            {isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">The first thing we want to say is that almost every day we have online meetings and discuss ideas for new concepts of the web
                                    outside of work - what makes us unique.
                                </div>}
                            {isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">The second is that we strictly adhere to project management methodologies and all our fellow workers are growing specialists in their stack.
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}