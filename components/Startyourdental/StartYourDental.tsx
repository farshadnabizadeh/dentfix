import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import StartYourDentalImg from '@/assets/png/imgstartyourdental.png'
const StartYourDental = () => {
    return (
        <div className='w-full h-[255px] flex justify-center bg-gradient-to-r from-[#114B9B] to-[#002457]'>
            <div className='w-[1440px] h-full relative flex items-center'>
                <div className='mr-[147px]'>
                    <div className='text-[25px] text-white font-bold'>Start your dental beauty journey in</div>
                    <div><span className='text-[25px] text-white font-bold'>our state-of-the-art clinic</span><span className='text-[34px] text-white mx-2'>with</span></div>
                    <div><span className='text-[25px] text-white font-bold'>our expert dentists!</span></div>
                </div>
                <div className='w-[300px] h-[48px] relative'>
                    <Button Title='Start My Journey Today!' />
                </div>
                <div className='ml-[155px]'>
                    <div className='relative w-[380px] h-[393px] translate-x-0 2xl:translate-x-[200px]'>
                    <Image src={StartYourDentalImg} alt='dentfix' fill/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartYourDental;
