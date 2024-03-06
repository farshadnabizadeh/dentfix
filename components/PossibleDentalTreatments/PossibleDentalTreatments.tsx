import React from 'react';
import Image from 'next/image';
import Shape2 from '@/assets/png/shape2.png';
import GirlRightImage from '@/assets/png/girlRightImage.png';
import Rosette from '@/assets/png/rosette.png';
const PossibleDentalTreatments = () => {
    return (
        <>
            <div className='w-full relative'>
                <div className='w-full h-[422px] absolute z-0'>
                    <div className='w-full h-full relative'>
                        <Image src={Shape2} alt='dentfix' fill />
                    </div>
                </div>
                <div className='w-full h-[513px] absolute z-10 top-[200px] px-[200px] flex justify-center'>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full absolute z-0 flex justify-end'>
                            <div className='w-[510px] h-full relative'>
                                <div className='w-[510px] h-full absolute z-0'>
                                    <Image src={GirlRightImage} alt='dentfix' fill />
                                </div>
                                <div className='w-[510px] h-full absolute z-10'>
                                    <div className='absolute top-0 right-0 w-[180px] h-[190px] flex justify-center items-center'>
                                        <Image src={Rosette} alt='dentfix' fill/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PossibleDentalTreatments;
