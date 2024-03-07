import React from 'react';
import Image from 'next/image';
import PackageLable from '@/assets/png/package_label.png'
const HollywoodSmile = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1447px] h-[2034px]'>
                <div className='w-full text-center text-[#114B9B] text-[34px] font-bold'>
                    Hollywood Smile Packages with Zirconium
                </div>
                <div className='w-full grid grid-cols-3 gap-[100px]'>
                    <div className='w-full mt-[38px] relative'>
                        <div className='w-full h-full flex justify-center absolute top-0 z-10'>
                            <div className='w-[350px] h-full relative'>
                                <div className='w-full h-[736px] relative border-2 border-[red]'>
                                    <div className='w-full h-[597px] rounded-tl-[71px] rounded-br-[71px] rounded-tr-[12px] rounded-bl-[12px] bg-[#EDF5FF] absolute bottom-0 left-0 z-0'>
                                        <div className='w-full h-[168px] absolute -top-[70px] left-0 z-10 flex justify-center'>
                                            <div className='w-[168px] h-[168px] bg-gradient-to-b from-[#FCFDFF] to-[#D0E5FF] rounded-tr-[83px] rounded-bl-[83px] rounded-tl-[12px] rounded-br-[12px] flex justify-center items-center'>
                                                <div className='w-full'>
                                                    <div className='w-full flex justify-center'>
                                                        <div className='text-[#3DA4FF] text-[39px] font-bold'>3.690€</div>
                                                    </div>
                                                    <div className='w-full flex justify-center'>
                                                        <div className='text-[#3DA4FF] text-[20px] -translate-y-[10px] font-semibold'>start from</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[900px] absolute z-30 top-0'>

                        </div>
                        <div className='w-full absolute z-50 top-[240px]'>
                            <div className='w-full h-[160px] relative'>
                                <div className='w-full h-[160px] absolute top-0 z-0'>
                                    <div className='w-full h-full relative top-0'>
                                        <Image src={PackageLable} alt='dentfix' />
                                    </div>
                                </div>
                                <div className='w-full h-[160px] flex justify-center items-center absolute top-0 z-10'>
                                    <span className='text-white text-[30px] font-bold'>Economy Package</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-[38px]'>
                        <div className='w-[350px] border-2 border-[red]'>

                        </div>
                    </div>
                    <div className='w-full mt-[38px]'>
                        <div className='w-[350px] border-2 border-[red]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HollywoodSmile;
