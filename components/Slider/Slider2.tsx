
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
import STARS from '@/assets/png/starts.png';
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
            img: Baner2,
            name: 'Olga R.',
            signature: 'Hollywood Smile Veneers',
            content: `I had the honor of having the friendliest, most compassionate, professional people I have ever met to assist me with my dental issues. I might be the only person on earth who who plans to return to Dentfix just to see the staff.
            The service was just as awesome and my new smile is evenore fabulous than I anticipated.`
        },
        {
            img: Baner1,
            name: 'Vanda D.',
            signature: 'Hollywood Smile Zirconium',
            content: `Went to Dentfix Oct 23 for start of dental work .
            11 extractions 6 implants and all on 6 . The doctors performing the treatment were lovely very experienced at the job . The clinic very clean, I had temporary denture which looked amazing for a temp and Jan 24 for final fitting .
            I’m so pleased with my teeth finally I can smile properly…
            thank you.`
        },
        {
            img: Baner2,
            name: 'Olga R.',
            signature: 'Hollywood Smile Veneers',
            content: `I had the honor of having the friendliest, most compassionate, professional people I have ever met to assist me with my dental issues. I might be the only person on earth who who plans to return to Dentfix just to see the staff.
            The service was just as awesome and my new smile is evenore fabulous than I anticipated.`
        },
        {
            img: Baner1,
            name: 'Vanda D.',
            signature: 'Hollywood Smile Zirconium',
            content: `Went to Dentfix Oct 23 for start of dental work .
            11 extractions 6 implants and all on 6 . The doctors performing the treatment were lovely very experienced at the job . The clinic very clean, I had temporary denture which looked amazing for a temp and Jan 24 for final fitting .
            I’m so pleased with my teeth finally I can smile properly…
            thank you.`
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
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination
                    >
                        {SLIDER_IMAGES?.map((image: any, index: any) => (
                            <SwiperSlide key={index}>
                                <div className='w-full border-2 border-[red]'>
                                    <div className='w-full flex'>
                                        <div className='w-[211px] h-[211px] relative'>
                                            <Image src={image.img} alt='dentfix' fill />
                                        </div>
                                        <div className='h-full'>
                                            <div className='text-white text-[18px] font-bold px-[15px]'>{image.name}</div>
                                            <div className='relative w-[92px] h-[15px] mx-[15px] mt-[10px]'><Image src={STARS} alt='dentfix' fill/></div>
                                            <div className='w-[431px] text-white px-5 mt-[20px]'>
                                                {image.content}
                                            </div>
                                        </div>
                                    </div>
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

