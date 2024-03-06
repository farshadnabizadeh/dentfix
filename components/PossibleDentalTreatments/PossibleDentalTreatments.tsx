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
                <div className='w-full h-[733px] absolute z-10 top-[200px] px-[240px] flex justify-center'>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full absolute z-0 flex justify-end'>
                            <div className='w-[710px] h-full relative'>
                                <div className='w-[710px] h-[733px] absolute z-0'>
                                    <Image src={GirlRightImage} alt='dentfix' fill />
                                </div>
                                <div className='w-[710px] h-full absolute z-10'>
                                    <div className='absolute top-0 right-0 w-[180px] h-[190px] flex justify-center items-center'>
                                        <Image src={Rosette} alt='dentfix' fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full absolute z-10 flex justify-end'>
                            <div className='w-full h-full relative'>
                                <div className='text-[34px] text-[#114B9B] font-bold'>Possible Dental Treatments</div>
                                <div><span className='text-[#114B9B] text-[34px]'>in a</span><span className='text-[#30A1E8] mx-2 text-[34px] font-bold'>Hollywood Smile</span></div>
                            </div>
                        </div>
                        <div className='w-[647px] top-[100px] absolute z-40'>
                          <div className='w-full h-[130px] flex justify-start border-2 border-[red]'>

                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PossibleDentalTreatments;
