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
                <div className='w-full h-[733px] 2xl:h-[833px] absolute z-10 top-[200px] px-[50px] 2xl:px-[240px] flex justify-center'>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full absolute z-0 flex justify-end'>
                            <div className='w-[610px] h-[633px] 2xl:w-[710px] 2xl:h-[733px] -translate-x-[100px] translate-y-4 2xl:translate-y-[30px] 2xl:translate-x-0 relative'>
                                <div className='w-full h-full  absolute z-0'>
                                    <Image src={GirlRightImage} alt='dentfix' fill />
                                </div>
                                <div className='w-[610px] 2xl:w-[710px] h-full absolute z-10'>
                                    <div className='absolute top-0 right-0 w-[150px] h-[150px] 2xl:w-[180px] 2xl:h-[190px] flex justify-center items-center'>
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
                        <div className='w-[750px] mt-[50px] 2xl:mt-[30px] 2xl:w-[790px] top-[100px] absolute z-40 border-2 border-[blue]'>
                            <div className='w-full h-[100px] 2xl:h-[125px] flex justify-start'>
                                <div className='w-[650px] h-full rounded-[10px] border-2 border-[red]'>

                                </div>
                            </div>
                            <div className='w-full h-[110px] mt-[38px] 2xl:h-[125px] flex justify-end'>
                                <div className='w-[650px] h-full rounded-[10px] border-2  border-[red]'>

                                </div>
                            </div>
                            <div className='w-full h-[110px] mt-[38px] 2xl:h-[125px] flex justify-start'>
                                <div className='w-[650px] h-full rounded-[10px] border-2 border-[red]'>

                                </div>
                            </div>
                            <div className='w-full h-[110px] mt-[38px] 2xl:h-[125px] flex justify-end'>
                                <div className='w-[650px] h-full rounded-[10px] border-2  border-[red]'>

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
