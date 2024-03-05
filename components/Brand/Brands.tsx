import React from 'react';
import Image from 'next/image';
import Brand2 from '@/assets/png/Image 1.png';
import Brand1 from '@/assets/png/Image 3.png';
import Brand3 from '@/assets/png/Image 2.png';
const Brands = () => {
    return (
        <div className='w-full'>
            <ul className='w-full flex justify-between items-end px-[100px] 2xl:px-0'>
                <li className='w-[100px] h-[50px] 2xl:w-[152px] 2xl:h-[80px] relative'><Image src={Brand1} alt='dentfix' fill /></li>
                <li className='w-[130px] h-[30px] 2xl:w-[152px] 2xl:h-[50px] relative'><Image src={Brand2} alt='dentfix' fill /></li>
                <li className='w-[120px] h-[40px] 2xl:w-[152px] 2xl:h-[40px] relative'><Image className='translate-y-[10px]' src={Brand3} alt='dentfix' fill /></li>
            </ul>
        </div>
    );
}

export default Brands;
