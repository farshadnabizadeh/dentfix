import React, { FC } from 'react';
import Image from 'next/image';
import PackageLable from '@/assets/png/package_label.png';
import Tik from '@/assets/png/Group 122.png';
import Button from '../Button/Button';
interface PackageProps {
    data?: any,
    image?: any,
    price?: any,
    labelName?:any,
}
const Package1: FC<PackageProps> = ({ data, image, price,labelName }) => {
    return (
        <div className='w-full mt-[38px] relative'>
            <div className='w-full h-full flex justify-center absolute top-0 z-10'>
                <div className='w-[350px] h-full relative'>
                    <div className='w-full h-[736px] relative'>
                        <div className='w-full h-[597px] rounded-tl-[71px] rounded-br-[71px] rounded-tr-[12px] rounded-bl-[12px] bg-[#EDF5FF] absolute bottom-0 left-0 z-0'>
                            <div className='w-full h-[168px] absolute -top-[70px] left-0 z-10 flex justify-center'>
                                <div className='w-[168px] h-[168px] bg-gradient-to-b from-[#FCFDFF] to-[#D0E5FF] rounded-tr-[83px] rounded-bl-[83px] rounded-tl-[12px] rounded-br-[12px] flex justify-center items-center'>
                                    <div className='w-full'>
                                        <div className='w-full flex justify-center'>
                                            <div className='text-[#3DA4FF] text-[39px] font-bold'>{price}€</div>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <div className='text-[#3DA4FF] text-[20px] -translate-y-[10px] font-semibold'>start from</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full translate-y-[230px]'>
                                {
                                    data?.map((item: any, index: any) => (
                                        <>
                                            <div className='w-full flex justify-center'>
                                                <div className='w-[300px] flex mt-[18px]'>
                                                    <div>
                                                        <Image src={Tik} alt='dentfix' />
                                                    </div>
                                                    <div className='mx-1 text-[12px]'>
                                                        {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[800px] absolute z-[999999] top-0'>
                <div className='w-[225px] h-[48px] absolute bottom-0 translate-x-[40px]'>
                    <Button Title={'Choose Plan'} Color={'border-[#ffffff]'} />
                </div>
            </div>
            <div className='w-full absolute z-50 top-[240px]'>
                <div className='w-full h-[160px] relative'>
                    <div className='w-full h-[160px] absolute top-0 z-0'>
                        <div className='w-full h-full relative top-0'>
                            <Image src={image} alt='dentfix' />
                        </div>
                    </div>
                    <div className='w-full h-[160px] flex justify-center items-center absolute top-0 z-10'>
                        <span className='text-white text-[30px] font-bold'>{labelName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package1;
