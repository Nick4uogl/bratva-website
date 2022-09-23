import React from 'react'
import { motion } from "framer-motion"
import './Solutions.scss'

export default function Solutions() {
    const [isDrag, setIsDrag] = React.useState(window.innerWidth <= 1500 ? true : false)
    const [carouselWidthToScroll, setCarouselWidthToScroll] = React.useState()

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1500) {
                setIsDrag(true)
            } else {
                setIsDrag(false)
            }
        }
        setCarouselWidthToScroll(carousel.current.scrollWidth - carousel.current.offsetWidth)
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    })

    const carousel = React.useRef()
    return (
        <section className='solutions'>
            <div className="solutions__container">
                <h2 className="solutions__title">Solutions</h2>
                <div className="solutions__intro">We discuss all solutions individually for each client/company and take into account the needs of the business. Here are the main solutions.</div>
                <div className="solutions__row">
                    <div className="solutions__item item-solutions item-solutions_purple">
                        <div className="item-solutions__category">
                            <h3>Web development:</h3>
                            <motion.div className='item-solutions__carousel' ref={carousel}>
                                <motion.ul className='item-solutions__services'
                                    drag={isDrag ? "x" : ""}
                                    dragConstraints={{ left: 0, right: -carouselWidthToScroll }}
                                >
                                    <motion.li>discussions</motion.li>
                                    <motion.li>market analysis</motion.li>
                                    <motion.li>project documentation</motion.li>
                                    <motion.li>design</motion.li>
                                    <motion.li>frontend/backend</motion.li>
                                    <motion.li>host/server</motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>web-stores</li>
                            <li>corporate websites  </li>
                            <li>landing pages</li>
                            <li>out source</li>
                            <li>working on startups</li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_blue">
                        <div className="item-solutions__category">
                            <h3>Web development:</h3>
                            <motion.div className='item-solutions__carousel' ref={carousel}>
                                <motion.ul className='item-solutions__services'
                                    drag={isDrag ? "x" : ""}
                                    dragConstraints={{ left: 0, right: -carouselWidthToScroll }}
                                >
                                    <motion.li>discussions</motion.li>
                                    <motion.li>market analysis</motion.li>
                                    <motion.li>project documentation</motion.li>
                                    <motion.li>design</motion.li>
                                    <motion.li>frontend/backend</motion.li>
                                    <motion.li>host/server</motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>web-stores</li>
                            <li>corporate websites  </li>
                            <li>landing pages</li>
                            <li>out source</li>
                            <li>working on startups</li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_green">
                        <div className="item-solutions__category">
                            <h3>Web development:</h3>
                            <motion.div className='item-solutions__carousel' ref={carousel}>
                                <motion.ul className='item-solutions__services'
                                    drag={isDrag ? "x" : ""}
                                    dragConstraints={{ left: 0, right: -carouselWidthToScroll }}
                                >
                                    <motion.li>discussions</motion.li>
                                    <motion.li>market analysis</motion.li>
                                    <motion.li>project documentation</motion.li>
                                    <motion.li>design</motion.li>
                                    <motion.li>frontend/backend</motion.li>
                                    <motion.li>host/server</motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>web-stores</li>
                            <li>corporate websites  </li>
                            <li>landing pages</li>
                            <li>out source</li>
                            <li>working on startups</li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_gray">
                        <div className="item-solutions__category">
                            <h3>Web development:</h3>
                            <motion.div className='item-solutions__carousel' ref={carousel}>
                                <motion.ul className='item-solutions__services'
                                    drag={isDrag ? "x" : ""}
                                    dragConstraints={{ left: 0, right: -carouselWidthToScroll }}
                                >
                                    <motion.li>discussions</motion.li>
                                    <motion.li>market analysis</motion.li>
                                    <motion.li>project documentation</motion.li>
                                    <motion.li>design</motion.li>
                                    <motion.li>frontend/backend</motion.li>
                                    <motion.li>host/server</motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>web-stores</li>
                            <li>corporate websites  </li>
                            <li>landing pages</li>
                            <li>out source</li>
                            <li>working on startups</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}