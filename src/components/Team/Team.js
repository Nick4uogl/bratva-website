import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import './Team.scss'
import test from '../../img/solutions-bg.png'
import pohoriliy1 from '../../img/team/pohoriliy1.png'
import pohoriliy2 from '../../img/team/pohoriliy2.png'
import pohoriliy3 from '../../img/team/pohoriliy3.png'


export default function Team() {
    return (
        <section id='team' className='team'>
            <div className="team__container">
                <h1 className="team__title">Team</h1>
                <Swiper className='team__swiper'
                    modules={Navigation}
                    navigation
                    spaceBetween={38}
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
                    <SwiperSlide className='member'>
                        <div className="member__images">
                            <div className='member__image'><img src={pohoriliy3} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy1} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy2} alt="" /></div>
                        </div>
                        <h2 className='member__title'>Ivan Pohorilyi: CEO, PM</h2>
                    </SwiperSlide>
                    <SwiperSlide className='member'>
                        <div className="member__images">
                            <div className='member__image'><img src={pohoriliy3} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy2} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy1} alt="" /></div>
                        </div>
                        <h2 className='member__title'>Ivan Pohorilyi: CEO, PM</h2>
                    </SwiperSlide>
                    <SwiperSlide className='member'>
                        <div className="member__images">
                            <div className='member__image'><img src={pohoriliy3} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy2} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy1} alt="" /></div>
                        </div>
                        <h2 className='member__title'>Ivan Pohorilyi: CEO, PM</h2>
                    </SwiperSlide>
                    <SwiperSlide className='member'>
                        <div className="member__images">
                            <div className='member__image'><img src={pohoriliy3} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy2} alt="" /></div>
                            <div className='member__image'><img src={pohoriliy1} alt="" /></div>
                        </div>
                        <h2 className='member__title'>Ivan Pohorilyi: CEO, PM</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
