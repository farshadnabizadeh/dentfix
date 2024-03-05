import React from 'react';
import Image from 'next/image';
import LogoImg from '@/assets/png/logo.png'
import ThoothImg from '@/assets/png/icon.png'
const Hero = () => {
    return (
        <section className='w-full h-[540px] bg-gradient-to-r from-[#114B9B] to-[#002457] relative'>
            <div className='w-full relative'>
                <div className='w-full absolute left-[240px] top-[28px] z-0'>
                    <div className='w-[201px] h-[51px] relative '>
                        <Image src={LogoImg} alt='dentfix' fill />
                    </div>
                </div>
                <div className='w-full absolute z-0 border-2 border-red-600'>
                    <div className='w-[433px] h-[517px] absolute top-0 right-0'>
                        <Image src={ThoothImg} alt='dentfix' />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;
