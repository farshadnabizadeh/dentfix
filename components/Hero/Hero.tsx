import React from 'react';
import Image from 'next/image';
import LogoImg from '@/assets/png/logo.png';
import ThoothImg from '@/assets/png/icon.png';
import ArrowToRight from '@/assets/png/Icon akar-arrow-right.png';
import Girl from '@/assets/png/image.png';
import HeroShape from '@/assets/png/HeroShape.png';
import Rosette from '@/assets/png/rosette.png';
import Button from '../Button/Button';
const Hero = () => {
    return (
        <section className='w-full h-[900px] bg-gradient-to-r from-[#114B9B] to-[#002457] relative overflow-hidden'>
            <div className='w-full h-full absolute z-0'>
                <div className='w-full absolute left-[240px] top-[48px] z-0'>
                    <div className='w-[150px] h-[35px] relative '>
                        <Image src={LogoImg} alt='dentfix' fill />
                    </div>
                </div>
                <div className='w-full absolute z-0'>
                    <div className='w-[290px] 2xl:w-[320px] absolute top-[90px] right-[25px] 2xl:top-[47px] 2xl:right-[79px]'>
                        <Image src={ThoothImg} alt='dentfix' />
                    </div>
                </div>
                <div className='w-full absolute z-0'>
                    <div className='absolute top-[190px] left-[240px]'>
                        <div className='text-white text-[35px] font-semibold'>Boost Your Confidence with</div>
                        <div className='text-white text-[40px] font-bold'>A Hollywood Smile!</div>
                        <div className='text-white text-[26px]'>We are dedicated to helping you <span className='font-bold'>achieve</span></div>
                        <div className='text-white text-[26px]'>a beautiful smile that radiates <span className='font-bold'>confidence.</span></div>
                    </div>
                </div>
                <div className='w-[800px] h-[540px] absolute top-[120px] right-0 z-30'>
                    <div className='w-full h-full flex justify-start items-center'>
                        <div className='translate-x-40 translate-y-7 2xl:translate-y-0 2xl:translate-x-0 w-[501px] h-[486px] 2xl:w-[601px] 2xl:h-[586px] relative'>
                            <div className='w-full h-full absolute z-0 top-0 left-0'>
                                <div className='w-full h-full relative'>
                                    <Image src={Girl} alt='Girl' fill />
                                </div>
                                <div className='w-[130px] h-[140px] top-[30px] 2xl:top-[60px] right-0 absolute'>
                                    <Image src={Rosette} alt='Rosette' fill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[106%] h-[700px] -left-[30px] -bottom-[20px] absolute z-30'>
                <div className='w-full h-[48px] left-[270px] top-[220px] absolute z-40'>
                    <div className='w-[330px] h-full relative'>
                        <Button Title={'Schedule Your Free Consult'}/>
                    </div>
                </div>
                <div className='w-full h-full relative'>
                    <Image src={HeroShape} alt='Hero Shape' fill />
                </div>
            </div>
        </section>
    );
}

export default Hero;
