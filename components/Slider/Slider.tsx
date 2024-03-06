import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PREVIOUSBTN from '@/assets/png/previousbtn.png'
import NEXTBTN from '@/assets/png/nextbtn.png'
import BANER1 from '@/assets/png/Group 17.png';
import BANER2 from '@/assets/png/Group 18.png';
import BANER3 from '@/assets/png/Group 108.png';
interface SliderProps {
    slidesPerView?: number,
    height?: string,
    fontSize1?: string,
    fontSize2?: string,
    left?: string,
    right?: string,
    top?: string,
    SLIDER_IMAGES?: any
}
const Slider: FC<SliderProps> = (SliderProps) => {
    const SLIDER_IMAGES = [
        {
            img: BANER2,
        },
        {
            img: BANER1,
        },
        {
            img: BANER3,
        },
    ]
    return (
        <div className='w-full h-full relative border-2 border-[red]'>
            <div className={`absolute top-0 ${SliderProps.left} h-full z-30`}>
                <div className="swiper-button-prev-custom flex h-full w-full items-center" role="button">
                    <Image width={20} src={PREVIOUSBTN} alt="PREVIOUSBTN" />
                </div>
            </div>
            <div className={`absolute top-0 ${SliderProps.right} h-full z-30`}>
                <div className="swiper-button-next-custom flex h-full w-full items-center justify-end" role="button">
                    <Image width={20} src={NEXTBTN} alt="NEXTBTN" />
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
                <div className='w-[90%] 2xl:w-[93%] h-[500px] border-2 border-[#fff]'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination
                    >
                        {SLIDER_IMAGES?.map((image: any, index: any) => (
                            <SwiperSlide key={index}>
                                <div className='w-[400px] h-[462px] relative'>
                                    <Image src={image.img} alt='dentfix' fill />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider;
