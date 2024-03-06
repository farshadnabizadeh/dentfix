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
                <div className='w-[90%] 2xl:w-[93%] h-full'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={SliderProps.slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination
                    >
                        {SliderProps.SLIDER_IMAGES?.map((image: any, index: any) => (
                            <SwiperSlide key={index}>
                                <div className={`w-full ${SliderProps.height} relative`}>
                                    <div className='w-full h-full absolute z-10 bg-[rgba(0,0,0,0.8)]'></div>
                                    <div className='w-full h-full absolute z-0'>
                                        <Image src={image.src} alt={image.alt} fill />
                                    </div>
                                    <div className='w-full h-[78px] flex justify-center absolute z-20 bottom-0 left-0'>
                                        <div className='w-[278px] h-full bg-white rounded-t-md relative'>
                                            <div className='absolute top-0 w-full flex justify-center'>
                                                <div className='w-[50px] h-[50px] rounded-full border-[2px] -translate-y-[30px] border-[#fff]'>
                                                    <Image src={image.flag} alt='flag' fill />
                                                </div>
                                            </div>
                                            <div className='w-full text-[16px] flex justify-center mt-[25px]'>
                                                <span className='text-[#090013] font-bold'>{image.text1}</span>
                                                <span className='text-[#090013] font-bold mx-1'>{'|'}</span>
                                                <span className='text-[#090013] font-normal'>{image.text2}</span>
                                            </div>
                                            <div className='w-full text-[12px] flex justify-center mt-[2px]'>
                                                <span className='text-[#090013] font-bold'>{image.text3}</span>
                                                <span className='text-[#090013] font-bold'>{':'}</span>
                                                <span className='text-[#090013] font-bold ml-1'>{image.text4}</span>
                                                <span className='text-[#090013] font-bold mx-1'>{'|'}</span>
                                                <span className='text-[#090013] font-normal'>{image.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-full absolute z-40 ${SliderProps.top}`}>
                                        <div className='w-full flex justify-center'>
                                            <a href='#' className={`text-white ${SliderProps.fontSize1} font-bold`}><u>Click for</u></a>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <div className={`${SliderProps.fontSize2} text-white`}>more before and after photos</div>
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

export default Slider;
