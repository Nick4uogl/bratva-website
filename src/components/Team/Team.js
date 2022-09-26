import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import './Team.scss'
import test from '../../img/solutions-bg.png'


export default function Team() {
    return (
        <section id='team' className='team'>
            <div className="team__container">
                <h1 className="team__title">Team</h1>
                <Swiper className='team__swiper'
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
                    <SwiperSlide className='project-cases'>
                        <img src={test} alt="" />
                        <h2 className='project-cases__title'>name of case</h2>
                    </SwiperSlide>
                    <SwiperSlide className='project-cases'>
                        <img src={test} alt="" />
                        <h2 className='project-cases__title'>name of case</h2>
                    </SwiperSlide>
                    <SwiperSlide className='project-cases'>
                        <img src={test} alt="" />
                        <h2 className='project-cases__title'>name of case</h2>
                    </SwiperSlide>
                    <SwiperSlide className='project-cases'>
                        <img src={test} alt="" />
                        <h2 className='project-cases__title'>name of case</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
