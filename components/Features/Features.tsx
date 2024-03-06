import React from 'react';

const Features = () => {
    return (
        <div className='w-full h-full flex'>
            <div className='w-full h-full flex-1 flex justify-center items-center pr-[28px]'>
                <div className='text-[70px] text-[rgba(41,131,255,0.3)] font-bold'>01</div>
            </div>
            <div className='w-full h-full flex-1 flex justify-center items-center pr-[28px]'>
                <div className='text-[70px] text-[rgba(41,131,255,0.6)] font-bold'>02</div>
            </div>
            <div className='w-full h-full flex-1 flex justify-center items-center pr-[28px]'>
                <div className='text-[70px] text-[rgba(41,131,255,1)] font-bold'>03</div>
            </div>
        </div>
    );
}

export default Features;
