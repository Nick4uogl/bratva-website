import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import './Cases.scss'
import test from '../../img/solutions-bg.png'



export default function Cases() {
    return (
        <section id='cases' className='cases'>
            <div className="cases__container">
                <h2 className="cases__title">Cases</h2>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">Web-development</h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">Mobile App dev</h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">Bot development</h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">Desktop software</h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                        <SwiperSlide className='category-cases__project project-cases'>
                            <img src={test} alt="" />
                            <h2 className='project-cases__title'>name of case</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section >
    )
}