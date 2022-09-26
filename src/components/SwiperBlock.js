import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import './SwiperBlock.scss'

export default function SwiperBlock() {
    return (
        <Swiper className='swiper-block'
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
        </Swiper>
    )
}