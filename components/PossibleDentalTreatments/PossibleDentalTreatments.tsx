import React from 'react';
import Image from 'next/image';
import Shape2 from '@/assets/png/shape2.png'
const PossibleDentalTreatments = () => {
    return (
        <>
            <div className='w-full relative'>
                <div className='w-full h-[422px] absolute z-0'>
                    <div className='w-full h-full relative'>
                        <Image src={Shape2} alt='dentfix' fill />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PossibleDentalTreatments;
