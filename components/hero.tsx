'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Link from 'next/link'

export default function HeroSec(){
    return(
      <main className='pt-[20px]'>

        {/*--=== HERO TITLE ===--*/}
        <div className='hero'>
          <span>Explore Your Inner Self</span>
          <h1>Rise & <br/> Thrive</h1>
          <hr/>
          <p className='sm:w-[300px] px-2 md:px-0'>Discover blogs that nurture your mental health, fuel personal growth, and spark a journey toward a healthier, happier you.</p>
        </div>

        {/*--=== SWIPER FOR GLIMPSES OF BLOGS ===--*/}
        <Swiper
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 70,
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 1500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1560: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Keyboard, Mousewheel]}
          className='swiper'
          >
          <div className='swiper-wrapper'>
            <SwiperSlide className='swiper-slide swiper-slide--one'>
              <div className='swiperContent'>
                <h2>#Confidence-Building</h2>
                <p>Unlock your true potential with confidence-building tips that empower you to face challenges fearlessly.</p>
                <Link href='#' className='Link'>Explore</Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide swiper-slide--two'>
              <div className='swiperContent'>
                <h2>#Well-Being</h2>
                <p>Prioritize your well-being with tips to nurture your mind, body, and soul for a healthier, more fulfilling life.</p>
                <Link href='#' className='Link'>Explore</Link>
              </div>
            </SwiperSlide>
      
            <SwiperSlide className='swiper-slide swiper-slide--three'>
      
              <div className='swiperContent'>
                <h2>#Mental-Peace</h2>
                <p>Discover simple practices to cultivate mental peace, reduce stress, and embrace a calmer, more balanced mind.</p>
                <Link href='#' className='Link'>Explore</Link>
              </div>
            </SwiperSlide>
          </div>
          <div className='swiper-pagination'></div>
        </Swiper>

      </main>
    )
}