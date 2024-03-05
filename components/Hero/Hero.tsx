import React from 'react';
import Image from 'next/image';
import LogoImg from '@/assets/png/logo.png'
import ThoothImg from '@/assets/png/icon.png'
const Hero = () => {
    return (
        <section className='w-full h-[540px] bg-gradient-to-r from-[#114B9B] to-[#002457] relative'>
            <div className='w-full relative'>
                <div className='w-full absolute left-[240px] top-[28px] z-0'>
                    <div className='w-[150px] h-[35px] relative '>
                        <Image src={LogoImg} alt='dentfix' fill />
                    </div>
                </div>
                <div className='w-full absolute z-0'>
                    <div className='w-[300px] absolute top-[47px] right-[79px]'>
                        <Image src={ThoothImg} alt='dentfix' />
                    </div>
                </div>
                <div className='w-full absolute z-0'>
                    <div className='absolute top-[244px] left-[240px]'>
                        <div className='text-white text-[35px] font-semibold'>Boost Your Confidence with</div>
                        <div className='text-white text-[40px] font-bold'>A Hollywood Smile!</div>
                        <div className='text-white text-[26px]'>We are dedicated to helping you <span className='font-bold'>achieve</span></div>
                        <div className='text-white text-[26px]'>a beautiful smile that radiates <span className='font-bold'>confidence.</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
