import React from 'react';
import Package1 from './Package1';
const HollywoodSmile = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1447px] h-[2034px]'>
                <div className='w-full text-center text-[#114B9B] text-[34px] font-bold'>
                    Hollywood Smile Packages with Zirconium
                </div>
                <div className='w-full grid grid-cols-3 gap-[100px]'>
                    {/* START */}
                    <Package1 />
                    {/* END */}
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
