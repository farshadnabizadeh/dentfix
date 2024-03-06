import React,{FC} from 'react';
import Image from 'next/image';
import ArrowToRight from '@/assets/png/Icon akar-arrow-right.png';
interface ButtonProps{
    Title?:string,
    Color?:string,
}
const Button:FC<ButtonProps> = ({Title,Color='border-[#114B9B]'}) => {
    return (
        <>
            <div className='w-full h-full bg-gradient-to-r from-[#FF9D17] to-[#FF7F00]  rounded-[24px] cursor-pointer'>
                <div className={`absolute w-[48px] h-[48px] bg-[#FF7F00] border-2 ${Color} rounded-full z-10`}>
                    <div className='w-full h-full flex items-center justify-center relative'>
                        <div className='w-[14px] h-[13px] relative'>
                            <Image src={ArrowToRight} alt='dentfix' fill />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full absolute z-0 flex justify-center items-center'>
                    <span className='text-white font-bold text-[18px] translate-x-4'>{Title}</span>
                </div>
            </div>
        </>
    );
}

export default Button;
