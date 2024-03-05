import React from 'react';
import Image from 'next/image';
import LogoImg from '@/assets/png/logo.png';
import ThoothImg from '@/assets/png/icon.png';
import ArrowToRight from '@/assets/png/Icon akar-arrow-right.png';
import Girl from '@/assets/png/image.png';
import HeroShape from '@/assets/png/HeroShape.png';
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
                    <div className='w-[320px] h-[417px] absolute top-[47px] right-[79px]'>
                        <Image src={ThoothImg} alt='dentfix' />
                    </div>
                </div>
                <div className='w-full absolute z-0'>
                    <div className='absolute top-[140px] left-[240px]'>
                        <div className='text-white text-[35px] font-semibold'>Boost Your Confidence with</div>
                        <div className='text-white text-[40px] font-bold'>A Hollywood Smile!</div>
                        <div className='text-white text-[26px]'>We are dedicated to helping you <span className='font-bold'>achieve</span></div>
                        <div className='text-white text-[26px]'>a beautiful smile that radiates <span className='font-bold'>confidence.</span></div>
                    </div>
                </div>
                <div className='w-[800px] h-[540px] absolute top-[120px] right-0 z-30'>
                    <div className='w-full h-full flex justify-start items-center'>
                        <div className='w-[601px] h-[586px] relative'>
                            <div className='w-full h-full absolute z-0 top-0 left-0'>
                                <div className='w-full h-full relative'>
                                    <Image src={Girl} alt='Girl' fill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[106%] h-[700px] -left-[30px] -bottom-[20px] absolute z-30'>
                <div className='w-full h-[48px] left-[270px] top-[220px] absolute z-40'>
                    <div className='w-[330px] h-full bg-gradient-to-r from-[#FF9D17] to-[#FF7F00]  rounded-[24px] cursor-pointer'>
                        <div className='absolute w-[48px] h-[48px] bg-[#FF7F00] border-2 border-[#114B9B] rounded-full z-10'>
                            <div className='w-full h-full flex items-center justify-center relative'>
                                <div className='w-[14px] h-[13px] relative'>
                                    <Image src={ArrowToRight} alt='dentfix' fill />
                                </div>
                            </div>
                        </div>
                        <div className='w-[330px] h-full absolute z-0 flex justify-center items-center'>
                            <span className='text-white font-bold text-[18px] translate-x-4'>Schedule Your Free Consult</span>
                        </div>
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
