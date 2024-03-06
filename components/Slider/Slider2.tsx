
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
import Baner1 from '@/assets/png/slider2img1.png';
import Baner2 from '@/assets/png/slider2img2.png';
interface SliderProps {
    slidesPerView?: number,
    height?: string,
    fontSize1?: string,
    fontSize2?: string,
    left?: string,
    right?: string,
    top?: string,
}
const Slider2: FC<SliderProps> = (SliderProps) => {
    const SLIDER_IMAGES = [
        {
            img: Baner1,
            name:'Olga R.',
            signature:'Hollywood Smile Veneers',
        },
        {
            img: Baner2,
            name:'Vanda D.',
            signature:'Hollywood Smile Veneers',
        },
        {
            img: Baner1,
            name:'Olga R.',
            signature:'Hollywood Smile Veneers',
        },
        {
            img: Baner2,
            name:'Vanda D.',
            signature:'Hollywood Smile Veneers',
        },
    ]
    return (
        <div className='w-full h-full relative'>
            <div className={`absolute flex items-center top-0 ${SliderProps.left} h-[462px] z-30`}>
                <div className="swiper-button-prev-custom flex w-[50px] items-center" role="button">
                    <Image width={30} src={PREVIOUSBTN} alt="PREVIOUSBTN" />
                </div>
            </div>
            <div className={`absolute top-0 flex items-center ${SliderProps.right} h-[462px] z-30`}>
                <div className="swiper-button-next-custom flex w-[50px] items-center justify-end" role="button">
                    <Image width={30} src={NEXTBTN} alt="NEXTBTN" />
                </div>
            </div>
            <div className='absolute top-[40px] left-0 w-full h-full flex justify-center'>
                <div className='w-[90%]'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination
                    >
                        {SLIDER_IMAGES?.map((image: any, index: any) => (
                            <SwiperSlide key={index}>
                                <div className='w-[390px] h-[430px] relative'>
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

export default Slider2;

