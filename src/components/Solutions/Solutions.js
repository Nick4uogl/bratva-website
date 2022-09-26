import React from 'react'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/scss'
import './Solutions.scss'

export default function Solutions() {
    const [isLoop, setIsLoop] = React.useState(window.innerWidth < 1550 ? true : false)
    function handleResize() {
        if (window.innerWidth <= 1550) {
            setIsLoop(true)
        } else {
            setIsLoop(false)
        }
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <section id="solutions" className='solutions'>
            <div className="solutions__container">
                <h2 className="solutions__title">Solutions</h2>
                <div className="solutions__intro">We discuss all solutions individually for each client/company and take into account the needs of the business. Here are the main solutions.</div>
                <div className="solutions__row">
                    <div className="solutions__item item-solutions item-solutions_purple">
                        <div className="item-solutions__category">
                            <h3>Web development:</h3>
                            <div className='item-solutions__carousel'>
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>discussions</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>market analysis</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>project documentation</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>design</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>frontend/backend</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>host/server</SwiperSlide>
                                </Swiper>
                            </div>
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
                            <div className='item-solutions__carousel'>
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>discussions</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>market analysis</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>project documentation</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>design</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>frontend/backend</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>host/server</SwiperSlide>
                                </Swiper>
                            </div>
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
                            <div className='item-solutions__carousel' >
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>discussions</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>market analysis</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>project documentation</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>design</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>frontend/backend</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>host/server</SwiperSlide>
                                </Swiper>
                            </div>
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
                            <div className='item-solutions__carousel' >
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>discussions</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>market analysis</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>project documentation</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>design</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>frontend/backend</SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>host/server</SwiperSlide>
                                </Swiper>
                            </div>
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